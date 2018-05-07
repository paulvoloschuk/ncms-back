'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ENV = exports.ENV = 'production' || 'development';

var server = exports.server = {
  port: 3002,
  logLevel: 'trace'
};

var database = exports.database = function () {
  var config = {
    development: {
      host: 'localhost',
      user: 'root',
      database: 'sd_api',
      password: 'roundforest',
      debug: false
    },
    production: {
      host: 'localhost',
      user: 'root',
      database: 'sd_api',
      password: '',
      debug: false
    }
  };

  return config[ENV];
}();

var auth = exports.auth = {
  salt: 'SD-awesome-secret-salt',
  extra: {}
};

var logger = exports.logger = {
  showMillis: true,
  showTimestamp: true,
  prefix: '-->',
  debug: 'white',
  // Show logs in CLI
  active: true
};

exports.default = {
  server: server,
  database: database,
  auth: auth,
  logger: logger
};