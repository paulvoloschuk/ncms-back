import fileSystem from 'fs'
import yamlParser from 'js-yaml'
import log from '../logger'

/* Constants ================================================================ */
const INSTRUCTIONS_DIR = __dirname + '/instructions/',
      SQL = {
        GET_VERSION     : "SELECT `value` from options WHERE `key`=?",
        UPDATE_VERSION  : "UPDATE options SET `value`=? WHERE `key`='version'"
      }

/* Requests chain =========================================================== */
const runComands = (DB, instructions, version) =>
  new Promise((resolve, reject) => {
    const recursion = (counter = 0) => {
      let keys = Object.keys(instructions)

      // Saving version
      if (counter === keys.length)
        DB.query(SQL.UPDATE_VERSION, [version], (error, result, fields) => {
          if (error) reject(error)
          else {
            log.info('Transaction complete!')
            resolve()
          }
        })
      //
      else {
        log.trace(`Implementing "${keys[counter]}" instruction`)
        DB.query(instructions[keys[counter]], error => error
          ? reject(error)
          : recursion(++counter)
        )
      }
    }
    recursion()
  })

/* Version chain ============================================================ */
const runMigrations = (DB, migrations) =>
  new Promise((resolve, reject) => {
    const recursion = (counter = 0) => {
      if (counter === migrations.length) {
        DB.commit(error => error
          ? DB.rollback()
          : resolve()
        )
      }
      else {
        let version = migrations[counter],
            fileName = `v${version}.yaml`,
            instructions = yamlParser.safeLoad(
              fileSystem.readFileSync(INSTRUCTIONS_DIR + fileName)
            )

        log.trace(`Extracted ${Object.keys(instructions).length} instructions from ${fileName}`)

        DB.beginTransaction(error => {
          if (error) DB.rollback()
          log.warn(`Begin transaction to v${version}`)
          runComands(DB, instructions, version)
          .then(() => recursion(++counter))
          .catch(error => {
            log.error('Failed. Rollbacking database.')
            console.log(error);
            DB.rollback()
          })
        })
      }
    }
    recursion()
  })

/* Controller =============================================================== */
const migrationsController = DB =>
  DB.query(SQL.GET_VERSION, ['version'], (error, result, fields) => {
    let fileList = fileSystem
      .readdirSync(INSTRUCTIONS_DIR)
      .filter(file => file.match(/^v\d+\.\d+\.yaml$/)),
    versionsList = fileList
      .map(file => +file.slice(1, -5))
      .sort((a, b) => a - b),
    actualVersion = versionsList[versionsList.length - 1],
    currentVersion = error ? 0 : +result[0].value

    // start migrations
    if (currentVersion < actualVersion) {
      let data = versionsList.filter(version => version > currentVersion)

      if (!currentVersion) log.warn('First start. Begining to install SCHEMA.')
      else {
        log.warn(`Current version is v${currentVersion}. Start migrating to v${actualVersion}.`)
        log.trace(`${data.length} migrations was found: [ ${data.join(', ')} ]`)
      }

      runMigrations(DB, data)
        .then(() => log.info(`Migrations success. Database updated to "v${actualVersion}"`))
        .catch(error => log.error(`Migrations failed. Check the instructions.`))

    // All OK
  } else log.info('Database version is actual')
})

export default migrationsController
