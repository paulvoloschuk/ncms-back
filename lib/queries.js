import {auth} from './config'

let modifiedTokens = {
  password: `MD5(CONCAT(:password, \'${auth.salt}\'))`
}

export default {
  user: {
    post: `SELECT * FROM users WHERE login = :login AND password = ${modifiedTokens.password}`,
    put: `INSERT INTO users (login, password, fullname, rank, groupId) VALUES( :login, ${modifiedTokens.password}, :fullname, :rank, :groupId)`,
    patch: `UPDATE users SET login = :login, password = ${modifiedTokens.password}, fullname = :fullname, rank = :rank, groupId = :groupId WHERE id = :id`,
    delete: `DELETE FROM users WHERE id = :id`,
  }
}
