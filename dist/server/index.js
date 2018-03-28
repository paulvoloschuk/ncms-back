'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DB = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mysql = require('mysql');

var _mysql2 = _interopRequireDefault(_mysql);

var _mysqlMigrations = require('mysql-migrations');

var _mysqlMigrations2 = _interopRequireDefault(_mysqlMigrations);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _middleware = require('./middleware');

var _middleware2 = _interopRequireDefault(_middleware);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// const DB = mysql.createPool(config.database)

// migration.init(DB, __dirname + '/migrations')

// initialize
var App = (0, _express2.default)();
_logger2.default.trace('Initializing application...');

// connect to DB
var DB = exports.DB = _mysql2.default.createPool(_config2.default.database);

DB.getConnection(function (error) {
  return error ? _logger2.default.error('Error while connecting to MySQL server \n') : _logger2.default.info('Connection with MySQL server established \n');
});

// middleware
App.use([].concat(_toConsumableArray(_middleware2.default), [_bodyParser2.default.json(), (0, _cors2.default)()]));
_logger2.default.trace('Middleware applied');

// Add static files derectory
App.use('/static', _express2.default.static(__dirname + '/../public'));

// router
(0, _router2.default)(App);

App.disable('x-powered-by');
App.listen(_config2.default.server.port);

_logger2.default.trace('Magic appering on port: ' + _config2.default.server.port);