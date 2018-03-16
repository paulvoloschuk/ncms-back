'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var server = exports.server = {
  port: 3002,
  logLevel: 'trace'
};

var database = exports.database = {
  host: 'localhost',
  user: 'root',
  password: 'paulvoloschuk',
  database: 'sd_api',
  debug: false
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
  active: false
};

exports.default = {
  server: server,
  database: database,
  auth: auth,
  logger: logger
};