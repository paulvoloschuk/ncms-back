export const ENV = process.env.NODE_ENV || 'development'

export const server = {
  port: 3002,
  logLevel: 'trace'
}

export const database = {
  host: 'localhost',
  user: 'root',
  database: 'sd_api',
  password: ENV === 'development' ? 'roundforest' : '',
  debug: false
}

export const auth = {
  salt: 'SD-awesome-secret-salt',
  extra: {}
}

export const logger = {
  showMillis: true,
  showTimestamp: true,
  prefix: '-->',
  debug: 'white',
  // Show logs in CLI
  active: ENV === 'development'
}

export default {
  server,
  database,
  auth,
  logger
}
