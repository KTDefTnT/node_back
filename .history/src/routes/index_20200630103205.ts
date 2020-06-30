import user from './user'

export = (app: any): any => {
  app.get('/resgiter', user.register)
}