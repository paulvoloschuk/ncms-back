import queries from '../../queries'
import log from '../../logger'
import { DB } from '../../'

const methods = {
  // Single position
  post: (request, response) => {
    let { id } = request.body

    // Logging
    log.debug(`Quary: \`${queries.position.post}\``)
    log.debug(`Params: id: ${id || 'None'}`)
    log.trace(`Sending request...`)

    DB.query(queries.position.post, request.body, (error, result, fields) => {
      if (error) {
        log.error(error + '\n')
        response.sendStatus(500)
      } else if (result.length === 0) {
        log.error(`Wrong id received! \n`)
        response.sendStatus(412)
      } else {
        log.info(`Success. Returning data. \n`)

        // Sending data
        response.json(result)
      }
    })
  },
  // Deleting array of positions
  delete: (request, response) => {
    request.body.id = request.body.id.join(', ')
    log.info(request.body.id)
    // Logging
    log.debug(`Quary: \`${queries.position.delete}\``)
    log.debug(`Params: id: ${request.body.id}`)
    log.trace(`Sending request...`)

    DB.query(queries.position.delete, request.body, (error, result, fields) => {
      if (error) {
        log.error(error + '\n')
        response.sendStatus(500)
      } else if (result.length === 0) {
        log.error(`Wrong id received! \n`)
        response.sendStatus(412)
      } else {
        log.info(`Success. \n`)

        // Sending data
        response.json(result)
      }
    })

  }
}

export default methods
