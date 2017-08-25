import jwt from 'jsonwebtoken'
import keys from '../keys'
import {log} from '../'

export default function conditionSufficiency (request, response, next)  {
  let token = request.headers['x-access-token'] || null

  request.user = {
    id: null,
    login: 'anonymous',
    rank: 0
  }

  if (request.headers['x-access-token']) {
    jwt.verify(token, keys.private, (error, decoded) => {
      if(error) {
        log.error(error)
        request.user = userHandler
      }
      request.user = decoded
    })
  }

  next()
}
