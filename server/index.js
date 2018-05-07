import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mysql from 'mysql'

import applyMigrations from './migrations'
import applyRouter from './router'
import middleware from './middleware'
import config from './config'
import log from './logger'

// initialize
const App = express()
log.trace('Initializing application...')

// connect to DB
export const DB = mysql.createConnection(config.database)

DB.connect(error => error
  ? log.error('Error while connecting to MySQL server \n')
  : log.info('Connection with MySQL server established \n')
)

applyMigrations(DB)

// middleware
App.use([
  ...middleware,
  bodyParser.json(),
  cors()
])
log.trace('Middleware applied')

// Add static files derectory
App.use(
  '/static',
  express.static(__dirname + '/../public')
)

// router
applyRouter(App)


App.disable('x-powered-by')
App.listen(config.server.port)

log.trace('Magic appering on port: ' + config.server.port);
