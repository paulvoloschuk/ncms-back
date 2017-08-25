import queries from '../../queries'
import {createToken} from '../../token'

const methods = {
  // LOGIN
  post: (request, response) => {
    appInstance.DB.query(queries.user.post, request.body, (error, result, fields) => {
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
  },
  // ADD
  put: (request, response) => {
    appInstance.DB.query(queries.user.put, request.body, (error, result, fields) => {
      if (error) {
        // TODO: make logger
        console.log(error)
        response.sendStatus(500)
      } else {
        response.sendStatus(201)
      }
    })
  },
  // UPDATE
  patch: (request, response) => {
    appInstance.DB.query(queries.user.patch, request.body, (error, result, fields) => {
      if (error) {
        // TODO: make logger
        console.log(error)
        response.sendStatus(500)
      } else {
        response.sendStatus(202)
      }
    })
  },
  // DELETE
  delete: (request, response) => {
    appInstance.DB.query(queries.user.delete, request.body, (error, result, fields) => {
      if (error) {
        // TODO: make logger
        console.log(error)
        response.sendStatus(500)
      } else {
        response.sendStatus(202)
      }
    })
  }
}

export default methods
