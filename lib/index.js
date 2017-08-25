import express from 'express'
import bodyParser from 'body-parser'
import mysql from 'mysql'
import jwt from 'jsonwebtoken'
import {applyMiddleware} from './helpers'
import applyRouter from './router'
import {database as dataBaseConfig, server as serverConfig} from './config'
import {createToken} from './token'
import middleware from './middleware'

// initialize
const App = express()

// connect to DB
App.DB = mysql.createConnection(dataBaseConfig)

App.DB.connect(error => {
  if (!!error)
    console.log('Error:', error);
  else
    console.log('Connection established');
})

// middleware
applyMiddleware(App, [
  bodyParser.json(),
  ...middleware
])

// router
applyRouter(App)

App.disable('x-powered-by')
App.listen(serverConfig.port)

console.log('Magic appering on port: ' + serverConfig.port);
