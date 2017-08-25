import queries from '../../queries'
import {createToken} from '../../token'
import {DB, log} from '../../'

const methods = {
  // LOGIN
  post: (request, response) => {
    DB.query(queries.user.post, request.body, (error, result, fields) => {
      if (error) {
        log.error(error)
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
          role: result[0].role,
          rank: result[0].rank
        })
      }
    })
  }
}

export default methods
