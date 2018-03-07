'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prettyLogger = require('pretty-logger');

var _prettyLogger2 = _interopRequireDefault(_prettyLogger);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Set log level
var log = new _prettyLogger2.default(_config2.default.logger);
if (_config2.default.server.logLevel) _prettyLogger2.default.setLevel(_config2.default.server.logLevel, true);

var instanceDecorator = ['trace', 'debug', 'error', 'info', 'warn'].reduce(function (result, method) {
  result[method] = function (msg) {
    return _config2.default.logger.active ? log[method](msg) : null;
  };
  return result;
}, {});

exports.default = instanceDecorator;