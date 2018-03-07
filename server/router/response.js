import log from '../logger'
import { DB } from '../'
import queries from '../queries'

let requestCodes = {
  post: 200,
  put: 201,
  patch: 202,
  delete: 202,
  get: 200
}

export default (controller, method) =>
  (request, response) => {
    let params = Object.keys(request.body).map(item => item + ': ' + request.body[item])

    // Logging
    log.debug(`Quary: \`${queries[controller][method]}\``)
    log.debug(`Params: ${!!params.length ? `{${params.join(', ')}}` : 'None'}`)
    log.trace(`Sending request...`)

    DB.query(
      queries[controller][method],
      request.body,
      (error, result, fields) => {
        if (error) {
          log.error(error + '\n')
          response.sendStatus(500)
        } else {
          log.info('Success \n')
          if(method === 'get') response.json(result)
          else response.sendStatus(requestCodes[method])
        }
      }
    )
  }
