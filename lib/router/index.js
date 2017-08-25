import {keysFromQuery, hasKeys} from '../helpers'
import routes from './routes'
import queries from '../queries'

const Router = appInstance => {
  appInstance.route('/:controller')
    .all((request, response) => {
      let controller = request.params.controller,
          method = request.method.toLowerCase()

      // Reject if no such controller and method found
      if(!routes[controller] || !routes[controller][method])
        response.sendStatus(404)

      // Reject if wrong input data
      if(!hasKeys(request.body, keysFromQuery(queries[controller][method])))
        response.sendStatus(412)

      // Otherwise load controller
      routes[controller][method](request, response)

    })
}

export default Router
