export const ENV = process.env.NODE_ENV || 'development'

export const server = {
  port: 3002,
  logLevel: 'trace'
}

export const database = (() => {
  const config = {
    development: {
      host      : 'localhost',
      user      : 'root',
      database  : 'sd_api',
      password  : 'roundforest',
      debug     : false
    },
    production: {
      host      : 'localhost',
      user      : 'root',
      database  : 'sd_api',
      password  : '',
      debug     : false
    }
  }

  return config[ENV]
})()

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
