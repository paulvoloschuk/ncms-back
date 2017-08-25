import express from 'express'
import bodyParser from 'body-parser'
import mysql from 'mysql'
import Logger from 'pretty-logger'

import applyRouter from './router'
import middleware from './middleware'
import {applyMiddleware} from './helpers'
import config from './config'

// Set log level
export const log = new Logger(config.logger)
if (config.server.logLevel)
  Logger.setLevel(config.server.logLevel)

// initialize
const App = express()
log.trace('Initializing application...')

// connect to DB
export const DB = mysql.createConnection(config.database)

DB.connect(error => {
  if (!!error)
    log.error(error);
  else
    log.info('Connection with MySQL server established');
})

// middleware
applyMiddleware(App, [
  bodyParser.json(),
  ...middleware
])

// router
applyRouter(App)

App.disable('x-powered-by')
App.listen(config.server.port)

log.trace('Magic appering on port: ' + config.server.port);
