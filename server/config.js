export const server = {
  port: 3002,
  logLevel: 'trace'
}

export const database = {
  host: 'localhost',
  user: 'root',
  password: 'paulvoloschuk',
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
  debug: 'white',
  // Show logs in CLI
  active: true
}

export default {
  server,
  database,
  auth,
  logger
}
