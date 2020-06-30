import user from './user'

export = (app: any): any => {
  app.get('/register', user.register)
}