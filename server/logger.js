import Logger from 'pretty-logger'
import config from './config'


// Set log level
const log = new Logger(config.logger)
if (config.server.logLevel)
  Logger.setLevel(config.server.logLevel, true)

const instanceDecorator = ['trace', 'debug', 'error', 'info', 'warn']
.reduce((result, method) => ({
  ...result,
  [method]:  msg => config.logger.active ? log[method](msg) : null
}), {})

export default instanceDecorator
