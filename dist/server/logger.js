'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _prettyLogger = require('pretty-logger');

var _prettyLogger2 = _interopRequireDefault(_prettyLogger);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Set log level
var log = new _prettyLogger2.default(_config2.default.logger);
if (_config2.default.server.logLevel) _prettyLogger2.default.setLevel(_config2.default.server.logLevel, true);

var instanceDecorator = ['trace', 'debug', 'error', 'info', 'warn'].reduce(function (result, method) {
  return _extends({}, result, _defineProperty({}, method, function (msg) {
    return _config2.default.logger.active ? log[method](msg) : null;
  }));
}, {});

exports.default = instanceDecorator;