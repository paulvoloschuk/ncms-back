import {keysFromQuery, hasKeys} from '../helpers'
import createResponse from './response'
import routes from './routes'
import queries from '../queries'
import {log} from '../'

const Router = appInstance => {
  appInstance.route('/:controller')
    .all((request, response) => {
      let controller = request.params.controller,
          method = request.method.toLowerCase()

      // Reject if no such controller and method found
      if(!routes[controller] || !routes[controller][method] && !queries[controller][method])
        return response.sendStatus(404)

      // Reject if wrong input data
      if(!hasKeys(request.body, keysFromQuery(queries[controller][method])))
        return response.sendStatus(412)

      // Otherwise load controller or response creator
      if (routes[controller][method]) routes[controller][method](request, response)
      else createResponse(controller, method)(request, response)
    })
    log.trace('Routes applied')
}

export default Router
