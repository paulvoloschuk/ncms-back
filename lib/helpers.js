export const hasKeys = (obj, keys) => {
  if (!Array.isArray(keys)) throw TypeError('Object.prototype.hasKeys() expects an array.')
  for (let i = 0; i < keys.length; i++)
    if (!obj.hasOwnProperty(keys[i]))
      return false;
  return true;
}

export const keysFromQuery = query => {
  if (typeof query !== 'string') throw TypeError('keysFromQuery() expects a string.')
  return query.match(/\:(\w+)/g).map(match => match.slice(1))
}
export default {
  keysFromQuery: keysFromQuery
}
