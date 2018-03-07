'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keysFromQuery = exports.hasKeys = undefined;
exports.queryFormat = queryFormat;

var _config = require('./config');

var _ = require('./');

var hasKeys = exports.hasKeys = function hasKeys(obj, keys) {
  if (!Array.isArray(keys)) throw TypeError('hasKeys() expects an array.');
  for (var i = 0; i < keys.length; i++) {
    if (!obj.hasOwnProperty(keys[i])) return false;
  }return true;
};

function queryFormat(query, values) {
  if (!Object.keys(values).length) return query;
  return query.replace(/\:(\w+)/g, function (text, key) {
    if (values.hasOwnProperty(key)) return this.escape(values[key]);
    return text;
  }.bind(this));
}

var keysFromQuery = exports.keysFromQuery = function keysFromQuery(query) {
  if (typeof query !== 'string') throw TypeError('keysFromQuery() expects a string.');
  var matches = query.match(/\:(\w+)/g);
  return matches ? matches.map(function (match) {
    return match.slice(1);
  }) : [];
};

exports.default = {
  keysFromQuery: keysFromQuery,
  hasKeys: hasKeys
};