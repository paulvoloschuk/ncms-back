export const server = {
  port: 3002,
  logLevel: 'trace'
}

export const database = {
  host: 'localhost',
  user: 'root',
  password: 'roundforest',
  database: 'sd_api',
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
  debug: 'white'
}

export default {
  server: server,
  database: database,
  auth: auth,
  logger: logger
}
