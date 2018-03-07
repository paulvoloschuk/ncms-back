'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../helpers');

var _constants = require('../constants');

var _response = require('./response');

var _response2 = _interopRequireDefault(_response);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _queries = require('../queries');

var _queries2 = _interopRequireDefault(_queries);

var _permissions = require('../permissions');

var _permissions2 = _interopRequireDefault(_permissions);

var _ = require('../');

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requestTransformation = {
  get: 'FETCH_ALL rows from',
  post: 'FETCH row from',
  put: 'ADD row to',
  update: 'UPDATE row in',
  delete: 'REMOVE row from'
};

var Router = function Router(appInstance) {
  appInstance.route('/api/:controller').all(function (request, response) {
    var controller = request.params.controller,
        method = request.method.toLowerCase();

    // Logging attemptions
    _logger2.default.warn(request.user.login + '(rank: ' + request.user.rank + '): trying to ' + (requestTransformation[method] || 'make ' + method.toUpperCase() + ' request method to') + ' \'' + controller + '\'');

    // Reject if no such controller and method found
    if (!_routes2.default[controller] || !_routes2.default[controller][method] && !_queries2.default[controller][method]) {
      _logger2.default.error('Returning(404): No such method or controller \n');
      return response.sendStatus(404);
    }

    // Rejects if there is no user permissions
    if (_permissions2.default[controller][method] > request.user.rank) {
      _logger2.default.error('Returning(403): No permissions(' + request.user.rank + ', needed ' + _permissions2.default[controller][method] + '). Access Denied! \n');
      return response.sendStatus(403);
    }

    // Reject if wrong input data
    if (!(0, _helpers.hasKeys)(request.body, (0, _helpers.keysFromQuery)(_queries2.default[controller][method]))) {
      _logger2.default.error('Returning(412): Wrong input data \n');
      return response.sendStatus(412);
    }

    // Switching query data parser
    _.DB.config.queryFormat = method !== 'get' ? _helpers.queryFormat : undefined;

    // Otherwise load controller or response creator
    _logger2.default.trace('Making request to DataBase...');
    if (_routes2.default[controller][method]) _routes2.default[controller][method](request, response);else (0, _response2.default)(controller, method)(request, response);
  });

  // else return React bundle
  appInstance.route('*').get(function (_ref, response) {
    var isStaticFile = _ref.isStaticFile;

    if (isStaticFile) response.sendFile(_path2.default.join(isStaticFile));else response.sendFile(_path2.default.join(_constants.staticDirectoryPath + '/index.html'));
  });

  _logger2.default.trace('Routes applied');
};

exports.default = Router;