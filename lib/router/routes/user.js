import queries from '../../queries'
import {createToken} from '../../token'
import {DB, log} from '../../'

const methods = {
  // LOGIN
  post: (request, response) => {
    let params = Object.keys(request.body).map(item => item + ': ' + request.body[item])

    // Logging
    log.debug(`Quary: \`${queries.user.post}\``)
    log.debug(`Params: ${!!params.length ? `{${params.join(', ')}}` : 'None'}`)
    log.trace(`Sending request...`)

    DB.query(queries.user.post, request.body, (error, result, fields) => {
      if (error) {
        log.error(error + '\n')
        response.sendStatus(500)
      } else if (result.length === 0) {
        log.error(`Wrong login or/and password received! \n`)
        response.sendStatus(412)
      } else {
        log.info(`Autorization success. Returning token. \n`)
        // Sending jwt
        response.json({
          token: createToken({
            id: result[0].id,
            rank: result[0].rank,
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
