import user from './user'

console.log('user', user);

export = (app: any): any => {
  app.get('/resgiter', user.register)
}