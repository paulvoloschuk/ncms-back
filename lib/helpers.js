import {system} from './config'
import {log} from './'

export const hasKeys = (obj, keys) => {
  if (!Array.isArray(keys)) throw TypeError('hasKeys() expects an array.')
  for (let i = 0; i < keys.length; i++)
    if (!obj.hasOwnProperty(keys[i]))
      return false;
  return true;
}

export function queryFormat (query, values) {
  if (!Object.keys(values).length) return query
  return query.replace(
    /\:(\w+)/g,
    function (text, key) {
      if (values.hasOwnProperty(key))
        return this.escape(values[key])
      return text
    }.bind(this)
  )
}

export const keysFromQuery = query => {
  if (typeof query !== 'string') throw TypeError('keysFromQuery() expects a string.')
  let matches = query.match(/\:(\w+)/g)
  return matches ? matches.map(match => match.slice(1)) : []
}

export default {
  keysFromQuery: keysFromQuery,
  hasKeys: hasKeys
}
