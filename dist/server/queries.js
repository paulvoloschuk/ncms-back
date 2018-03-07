'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./config');

var modifiedTokens = {
  password: 'MD5(CONCAT(:password, \'' + _config.auth.salt + '\'))'
};

var universalDelete = function universalDelete(table) {
  return 'DELETE FROM ' + table + ' WHERE id IN(:id)';
};

exports.default = {
  user: {
    post: 'SELECT * FROM users WHERE login = :login AND password = ' + modifiedTokens.password,
    put: 'INSERT INTO users (login, password, fullname, role, rank, groupId) VALUES( :login, ' + modifiedTokens.password + ', :fullname, :role, :rank, :groupId)',
    patch: 'UPDATE users SET login = :login, password = ' + modifiedTokens.password + ', fullname = :fullname, role = :role, rank = :rank, groupId = :groupId WHERE id = :id',
    delete: universalDelete('users'),
    get: 'SELECT * FROM users'
  },
  position: {
    post: 'SELECT * FROM positions WHERE id = :id',
    put: 'INSERT INTO positions (name, category, type, geography, requirements, offerings, responsibilities, projectDescription, hot) VALUES( :name, :category, :type, :geography, :requirements, :offerings, :responsibilities, :projectDescription, :hot)',
    patch: 'UPDATE positions SET name = :name, category = :category, type = :type, geography = :geography, requirements = :requirements, offerings = :offerings, responsibilities = :responsibilities, projectDescription = :projectDescription, hot = :hot WHERE id = :id',
    delete: universalDelete('positions'),
    get: 'SELECT id, timestamp, name, category, type, geography, requirements, offerings, responsibilities, projectDescription, hot FROM positions'
  }
};