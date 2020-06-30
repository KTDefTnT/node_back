import user from './user'

export const app = app => {
  app.post('/resgiter', user.register)
}