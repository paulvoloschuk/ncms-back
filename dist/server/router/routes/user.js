'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _queries = require('../../queries');

var _queries2 = _interopRequireDefault(_queries);

var _token = require('../../token');

var _logger = require('../../logger');

var _logger2 = _interopRequireDefault(_logger);

var _ = require('../../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var methods = {
  // LOGIN
  post: function post(request, response) {
    var params = Object.keys(request.body).map(function (item) {
      return item + ': ' + request.body[item];
    });

    // Logging
    _logger2.default.debug('Quary: `' + _queries2.default.user.post + '`');
    _logger2.default.debug('Params: ' + (!!params.length ? '{' + params.join(', ') + '}' : 'None'));
    _logger2.default.trace('Sending request...');

    _.DB.query(_queries2.default.user.post, request.body, function (error, result, fields) {
      if (error) {
        _logger2.default.error(error + '\n');
        response.sendStatus(500);
      } else if (result.length === 0) {
        _logger2.default.error('Wrong login or/and password received! \n');
        response.sendStatus(412);
      } else {
        _logger2.default.info('Autorization success. Returning token. \n');
        // Sending jwt
        response.json({
          token: (0, _token.createToken)({
            id: result[0].id,
            rank: result[0].rank,
            login: result[0].login,
            password: result[0].password
          }),
          fullname: result[0].fullname,
          role: result[0].role,
          rank: result[0].rank
        });
      }
    });
  }
};

exports.default = methods;