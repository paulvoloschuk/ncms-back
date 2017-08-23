export default {
  user: {
    login: 'SELECT * FROM users WHERE login = :login AND password = :password',
    put: 'INSERT INTO users (login, password, fullname, rank, groupId) VALUES(:login, :password, :fullname, :rank, :groupId)',
    patch: 'UPDATE users SET login = :login, password = :password, fullname = :fullname, rank = :rank, groupId = :groupId WHERE id = :id',
    delete: 'DELETE FROM users WHERE id = :id',
  }
}
