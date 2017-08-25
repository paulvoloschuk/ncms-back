import {log, DB} from '../'
import queries from '../queries'

let requestCodes = {
  post: 200,
  put: 201,
  patch: 202,
  delete: 202
}

export default (controller, method) =>
  (request, response) =>
    DB.query(
      queries[controller][method],
      request.body,
      (error, result, fields) => {
        if (error) {
          log.error(error)
          response.sendStatus(500)
        } else response.sendStatus(requestCodes[method])
      }
    )
