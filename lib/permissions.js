// Permissions
// 0 - anonymous
// 1 - user
// 2 - moderator
// 3 - administrator

export default {
  user: {
    post: 0,
    put: 4,
    patch: 1,
    delete: 4,
    get: 1
  },
  position: {
    post: 0,
    get:0
  }
}
