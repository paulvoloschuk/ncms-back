"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Permissions
// 0 - anonymous
// 1 - user
// 2 - moderator
// 3 - administrator

exports.default = {
  user: {
    post: 0,
    put: 3,
    patch: 1,
    delete: 3,
    get: 1
  },
  position: {
    post: 0,
    put: 2,
    patch: 2,
    delete: 2,
    get: 0
  }
};