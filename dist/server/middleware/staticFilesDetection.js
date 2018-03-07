'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = staticFiles;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function staticFiles(request, response, next) {
  var originalUrl = request.originalUrl,
      requiredFilePath = _constants.staticDirectoryPath + originalUrl;


  if (_fs2.default.existsSync(requiredFilePath)) {
    _logger2.default.trace('Returning static file from \'' + originalUrl + '\' \n');
    request.isStaticFile = requiredFilePath;
  }

  next();
}