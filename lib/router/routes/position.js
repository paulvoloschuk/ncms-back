import queries from '../../queries'
import {DB, log} from '../../'

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
  }
}

export default methods
