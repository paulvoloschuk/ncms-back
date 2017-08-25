import {system} from './config'

export const hasKeys = (obj, keys) => {
  if (!Array.isArray(keys)) throw TypeError('hasKeys() expects an array.')
  for (let i = 0; i < keys.length; i++)
    if (!obj.hasOwnProperty(keys[i]))
      return false;
  return true;
}

export const keysFromQuery = query => {
  if (typeof query !== 'string') throw TypeError('keysFromQuery() expects a string.')
  return query.match(/\:(\w+)/g).map(match => match.slice(1))
}

export const applyMiddleware = (appInstance, middlewareList) => {
  if (!Array.isArray(middlewareList)) throw TypeError('applyMiddleware() expects an array.')
  middlewareList.forEach(middleware => appInstance.use(middleware))
}

export const commonResponse = (response, okCode) => (error, result, fields) => {
  if (error) {
    if (system.debug) console.log(error)
    response.sendStatus(500)
  } else response.sendStatus(okCode)
}

export default {
  keysFromQuery: keysFromQuery,
  hasKeys: hasKeys,
  applyMiddleware: applyMiddleware,
  commonResponse: commonResponse
}
