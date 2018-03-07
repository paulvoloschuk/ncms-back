import crossOrigin from './crossOrigin'
import requestValidation from './validation'
import staticFilesDetection from './staticFilesDetection'
import auth from './auth'
import log from '../logger'

const viewClientIp = (request, response, next) => {
  log.debug(`New '${request.method.toUpperCase()}' request from: ${request.client.remoteAddress}`)
  next()
}

export default [
  crossOrigin,
  viewClientIp,
  staticFilesDetection,
  requestValidation,
  auth,
]
