import {keysFromQuery, hasKeys} from '../helpers'
import queries from '../queries'
import {createToken} from '../token'

const Router = appInstance => {
  appInstance.route('/:controller')
    // LOGIN user
    .post((request, response) => {
      console.log(request.params);
      if(hasKeys(request.body, keysFromQuery(queries.user.post))) {
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
      } else response.sendStatus(400)
    })
    // ADD user
    .put((request, response) => {
      if (hasKeys(request.body, keysFromQuery(queries.user.put))) {
        appInstance.DB.query(queries.user.put, request.body, (error, result, fields) => {
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
        appInstance.DB.query(queries.user.patch, request.body, (error, result, fields) => {
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
        appInstance.DB.query(queries.user.delete, request.body, (error, result, fields) => {
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
}

export default Router
