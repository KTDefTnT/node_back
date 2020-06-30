var user = require('./user');

export = (app: any): any => {
  app.get('/register', user.register)
}