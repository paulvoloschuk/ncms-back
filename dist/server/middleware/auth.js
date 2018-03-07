'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = conditionSufficiency;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _keys = require('../keys');

var _keys2 = _interopRequireDefault(_keys);

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function conditionSufficiency(request, response, next) {
  if (request.isStaticFile) next();else {
    _logger2.default.trace('Autentification...');

    var token = request.headers['x-access-token'] || null,
        verificationData = void 0;

    request.user = {
      id: null,
      login: 'anonymous',
      rank: 0
    };

    if (request.headers['x-access-token']) {
      try {
        verificationData = _jsonwebtoken2.default.verify(token, _keys2.default.private);
      } catch (error) {
        _logger2.default.error('Autentification failed. ' + error.toString());
        return next();
      }
      _logger2.default.info('Success. IAT: ' + verificationData.iat);
      request.user = verificationData;
    } else _logger2.default.error('Autentification failed. No token found.');

    next();
  }
}