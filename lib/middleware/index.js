import crossOrigin from './crossOrigin'
import requestValidation from './validation'
import auth from './auth'
import {log} from '../'

const viewClientIp = (request, response, next) => {
  log.debug(`New '${request.method.toUpperCase()}' request from: ${request.client.remoteAddress}`)
  next()
}

export default [
  viewClientIp,
  requestValidation,
  auth,
  crossOrigin
]
