import crossOrigin from './crossOrigin'
import auth from './auth'
import {log} from '../'

const viewClientIp = (request, response, next) => {
  log.debug(`New '${request.method.toUpperCase()}' request from: ${request.client.remoteAddress}`)
  next()
}

export default [
  viewClientIp,
  auth,
  crossOrigin
]
