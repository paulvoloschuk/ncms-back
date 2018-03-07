'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createToken = undefined;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _keys = require('./keys');

var _keys2 = _interopRequireDefault(_keys);

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createToken = exports.createToken = function createToken(userData) {
  return _jsonwebtoken2.default.sign(userData, _keys2.default.private, _config.auth.extra);
};