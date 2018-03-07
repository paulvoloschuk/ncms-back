import log from '../logger'

export default function requestValidation (request, response, next)  {
  if (request.isStaticFile) next()
  else {
    let errors = []
    log.trace(`Validating request...`)

    if (request.headers['content-type'] && !request.headers['content-type'].includes('application/json'))
      errors.push(`Wrong content-type. Expecting 'application/json', instead of '${request.headers['content-type']}'.`)

    if(errors.length) {
      log.error('Fail. ' + errors.join(' '))
      return response.sendStatus(500)
    } else log.trace(`All seems to be okay.`)

    next()
  }
}
