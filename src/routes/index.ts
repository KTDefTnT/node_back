import user from './user'

module.exports = (app: any): any => {
  app.post('/register', user.register),
  app.post('/login', user.login),
  app.post('/logout', user.logout),
  app.post('/userList', user.userList),
  app.post('/deleteUser', user.deleteUser)
}