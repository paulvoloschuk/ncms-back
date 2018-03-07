'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _queries = require('../../queries');

var _queries2 = _interopRequireDefault(_queries);

var _logger = require('../../logger');

var _logger2 = _interopRequireDefault(_logger);

var _ = require('../../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var methods = {
  // Single position
  post: function post(request, response) {
    var id = request.body.id;

    // Logging

    _logger2.default.debug('Quary: `' + _queries2.default.position.post + '`');
    _logger2.default.debug('Params: id: ' + (id || 'None'));
    _logger2.default.trace('Sending request...');

    _.DB.query(_queries2.default.position.post, request.body, function (error, result, fields) {
      if (error) {
        _logger2.default.error(error + '\n');
        response.sendStatus(500);
      } else if (result.length === 0) {
        _logger2.default.error('Wrong id received! \n');
        response.sendStatus(412);
      } else {
        _logger2.default.info('Success. Returning data. \n');

        // Sending data
        response.json(result);
      }
    });
  },
  // Deleting array of positions
  delete: function _delete(request, response) {
    request.body.id = request.body.id.join(', ');
    _logger2.default.info(request.body.id);
    // Logging
    _logger2.default.debug('Quary: `' + _queries2.default.position.delete + '`');
    _logger2.default.debug('Params: id: ' + request.body.id);
    _logger2.default.trace('Sending request...');

    _.DB.query(_queries2.default.position.delete, request.body, function (error, result, fields) {
      if (error) {
        _logger2.default.error(error + '\n');
        response.sendStatus(500);
      } else if (result.length === 0) {
        _logger2.default.error('Wrong id received! \n');
        response.sendStatus(412);
      } else {
        _logger2.default.info('Success. \n');

        // Sending data
        response.json(result);
      }
    });
  }
};

exports.default = methods;