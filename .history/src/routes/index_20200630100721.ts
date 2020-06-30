import user from './user'

console.log('user', user);

export = (app: any): any => {
  app.post('/resgiter', user.register)
}