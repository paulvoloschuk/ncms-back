export const server = {
  port: 3002
}

export const database = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sd_api',
  debug: false,
  queryFormat: function (query, values) {
    if (!values) return query
    return query.replace(
      /\:(\w+)/g,
      function (text, key) {
        if (values.hasOwnProperty(key))
          return this.escape(values[key])
        return text
      }.bind(this)
    )
  }
}

export const auth = {
  salt: 'SD-awesome-secret-salt',
  extra: {}
}
