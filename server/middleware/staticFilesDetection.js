import path from 'path'
import fileSystem from 'fs'
import log from '../logger'
import { staticDirectoryPath } from '../constants'

export default function staticFiles (request, response, next) {
  let { originalUrl } = request,
      requiredFilePath = staticDirectoryPath + originalUrl

  // Index.html
  if (originalUrl === '/') {
    requiredFilePath = staticDirectoryPath + 'index.html'
  }

  if (fileSystem.existsSync(requiredFilePath)) {
    log.trace(`Returning static file from '${originalUrl}' \n`)
    request.isStaticFile = requiredFilePath
  }

  next()
}
