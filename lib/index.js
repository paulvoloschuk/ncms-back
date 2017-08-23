import express from 'express'
import bodyParser from 'body-parser'
import mysql from 'mysql'
import jwt from 'jsonwebtoken'
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
  .post((request, response) => {
    if(request.body.login && request.body.password) {
      DB.query(queries.user.login, request.body, (error, result, fields) => {
        if (error) {
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
  // .put((request, response) => {
  //   if()
  // })

App.disable('x-powered-by')
App.listen(serverConfig.port)

console.log('Magic appering on port: ' + serverConfig.port);
