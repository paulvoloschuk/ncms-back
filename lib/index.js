import express from 'express'
import bodyParser from 'body-parser'
import mysql from 'mysql'
import jwt from 'jsonwebtoken'
import {keysFromQuery, hasKeys} from './helpers'
import keys from './keys'
import {database as dataBaseConfig, server as serverConfig} from './config'
import queries from './queries'
import {createToken} from './token'

const App = express()

// connect to DB
const DB = mysql.createConnection(dataBaseConfig)

DB.connect(error => {
  if (!!error)
    console.log('Error:', error);
  else
    console.log('Connection established');
})

App.use(bodyParser.json())

App.route('/user')
  // LOGIN user
  .post((request, response) => {
    if(hasKeys(request.body, keysFromQuery(queries.user.post))) {
      DB.query(queries.user.post, request.body, (error, result, fields) => {
        if (error) {
          // TODO: make logger
          console.log(error)
          response.sendStatus(500)
        } else if (result.length === 0) {
          response.sendStatus(412)
        } else {
          // Sending jwt
          response.json({
            token: createToken({
              id: result[0].id,
              login: result[0].login,
              password: result[0].password
            }),
            fullname: result[0].fullname,
            rank: result[0].rank,
          })
        }
      })
    } else response.sendStatus(400)
  })
  // ADD user
  .put((request, response) => {
    if (hasKeys(request.body, keysFromQuery(queries.user.put))) {
      DB.query(queries.user.put, request.body, (error, result, fields) => {
        if (error) {
          // TODO: make logger
          console.log(error)
          response.sendStatus(500)
        } else {
          response.sendStatus(201)
        }
      })
    } else response.sendStatus(400)
  })
  // EDIT user
  .patch((request, response) => {
    if (hasKeys(request.body, keysFromQuery(queries.user.patch))) {
      DB.query(queries.user.patch, request.body, (error, result, fields) => {
        if (error) {
          // TODO: make logger
          console.log(error)
          response.sendStatus(500)
        } else {
          response.sendStatus(202)
        }
      })
    } else response.sendStatus(400)
  })
  // DELETE user
  .delete((request, response) => {
    if (hasKeys(request.body, keysFromQuery(queries.user.delete))) {
      DB.query(queries.user.delete, request.body, (error, result, fields) => {
        if (error) {
          // TODO: make logger
          console.log(error)
          response.sendStatus(500)
        } else {
          response.sendStatus(202)
        }
      })
    } else response.sendStatus(400)
  })

App.disable('x-powered-by')
App.listen(serverConfig.port)

console.log('Magic appering on port: ' + serverConfig.port);
