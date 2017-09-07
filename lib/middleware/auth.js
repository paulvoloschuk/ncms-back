import jwt from 'jsonwebtoken'
import keys from '../keys'
import {log} from '../'

export default function conditionSufficiency (request, response, next)  {
  log.trace(`Autentification...`)
  let token = request.headers['x-access-token'] || null,
      verificationData

  request.user = {
    id: null,
    login: 'anonymous',
    rank: 0
  }

  if (request.headers['x-access-token']) {
    try {
      verificationData = jwt.verify(token, keys.private)
    } catch(error) {
      log.error(error.toString())
    }
    log.info(`Success. IAT: ${verificationData.iat}`)
    request.user = verificationData
  } else log.error(`Autentification failed. No token found.`)

  next()
}
