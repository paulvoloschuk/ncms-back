import {keysFromQuery, hasKeys, queryFormat} from '../helpers'
import createResponse from './response'
import routes from './routes'
import queries from '../queries'
import permissions from '../permissions'
import {DB, log} from '../'

const requestTransformation = {
  get: 'FETCH_ALL rows from',
  post: 'FETCH row from',
  put: 'ADD row to',
  update: 'UPDATE row in',
  delete: 'REMOVE row from'
}

const Router = appInstance => {
  appInstance.route('/:controller')
    .all((request, response) => {
      let controller = request.params.controller,
          method = request.method.toLowerCase()

      // Logging attemptions
      log.warn(`${request.user.login}(rank: ${request.user.rank}): trying to ${requestTransformation[method] || `make ${method.toUpperCase()} request method to`} '${controller}'`)

      // Reject if no such controller and method found
      if (!routes[controller] || !routes[controller][method] && !queries[controller][method]) {
        log.error('Returning(404): No such method or controller \n')
        return response.sendStatus(404)
      }

      // Rejects if there is no user permissions
      if (permissions[controller][method] > request.user.rank) {
        log.error(`Returning(403): No permissions(${request.user.rank}, needed ${permissions[controller][method]}). Access Denied! \n`);
        return response.sendStatus(403)
      }

      // Reject if wrong input data
      if (!hasKeys(request.body, keysFromQuery(queries[controller][method]))) {
        log.error('Returning(412): Wrong input data \n')
        return response.sendStatus(412)
      }

      // Switching query data parser
      DB.config.queryFormat = (method !== 'get') ? queryFormat : undefined

      // Otherwise load controller or response creator
      log.trace('Making request to DataBase...')
      if (routes[controller][method]) routes[controller][method](request, response)
      else createResponse(controller, method)(request, response)
    })
    log.trace('Routes applied')
}

export default Router
