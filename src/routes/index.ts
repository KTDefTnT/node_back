import user from './user'

module.exports = (app: any): any => {
  app.post('/register', user.register)
}