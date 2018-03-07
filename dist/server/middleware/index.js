'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _crossOrigin = require('./crossOrigin');

var _crossOrigin2 = _interopRequireDefault(_crossOrigin);

var _validation = require('./validation');

var _validation2 = _interopRequireDefault(_validation);

var _staticFilesDetection = require('./staticFilesDetection');

var _staticFilesDetection2 = _interopRequireDefault(_staticFilesDetection);

var _auth = require('./auth');

var _auth2 = _interopRequireDefault(_auth);

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var viewClientIp = function viewClientIp(request, response, next) {
  _logger2.default.debug('New \'' + request.method.toUpperCase() + '\' request from: ' + request.client.remoteAddress);
  next();
};

exports.default = [_crossOrigin2.default, viewClientIp, _staticFilesDetection2.default, _validation2.default, _auth2.default];