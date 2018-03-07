'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

var _ = require('../');

var _queries = require('../queries');

var _queries2 = _interopRequireDefault(_queries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requestCodes = {
  post: 200,
  put: 201,
  patch: 202,
  delete: 202,
  get: 200
};

exports.default = function (controller, method) {
  return function (request, response) {
    var params = Object.keys(request.body).map(function (item) {
      return item + ': ' + request.body[item];
    });

    // Logging
    _logger2.default.debug('Quary: `' + _queries2.default[controller][method] + '`');
    _logger2.default.debug('Params: ' + (!!params.length ? '{' + params.join(', ') + '}' : 'None'));
    _logger2.default.trace('Sending request...');

    _.DB.query(_queries2.default[controller][method], request.body, function (error, result, fields) {
      if (error) {
        _logger2.default.error(error + '\n');
        response.sendStatus(500);
      } else {
        _logger2.default.info('Success \n');
        if (method === 'get') response.json(result);else response.sendStatus(requestCodes[method]);
      }
    });
  };
};