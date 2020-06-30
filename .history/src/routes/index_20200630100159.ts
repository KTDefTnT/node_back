import user from './user'

console.log('user', user);

export = app => {
  app.post('/resgiter', user.register)
}