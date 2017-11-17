import {log} from '../'

export default function requestValidation (request, response, next)  {
  log.trace(`Validating request...`)

  let errors = []

  if (request.headers['content-type'] && request.headers['content-type'] !== 'application/json')
    errors.push(`Wrong content-type. Expecting 'application/json', instead of '${request.headers['content-type']}'.`)

  if(errors.length) {
    log.error('Fail. ' + errors.join(' '))
    return response.sendStatus(500)
  } else log.trace(`All seems to be okay.`)

  next()
}
