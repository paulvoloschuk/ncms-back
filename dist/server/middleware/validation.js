'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = requestValidation;

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function requestValidation(request, response, next) {
  if (request.isStaticFile) next();else {
    var errors = [];
    _logger2.default.trace('Validating request...');

    if (request.headers['content-type'] && !request.headers['content-type'].includes('application/json')) errors.push('Wrong content-type. Expecting \'application/json\', instead of \'' + request.headers['content-type'] + '\'.');

    if (errors.length) {
      _logger2.default.error('Fail. ' + errors.join(' '));
      return response.sendStatus(500);
    } else _logger2.default.trace('All seems to be okay.');

    next();
  }
}