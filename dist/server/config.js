'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ENV = exports.ENV = 'production' || 'development';
console.log('constants', ENV);
var server = exports.server = {
  port: 3002,
  logLevel: 'trace'
};

var database = exports.database = {
  host: 'localhost',
  user: 'root',
  database: 'sd_api',
  password: ENV === 'development' ? 'roundforest' : '',
  debug: ENV === 'development'
};

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
  active: ENV === 'development'
};

exports.default = {
  server: server,
  database: database,
  auth: auth,
  logger: logger
};
