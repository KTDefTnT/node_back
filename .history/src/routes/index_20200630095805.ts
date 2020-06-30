import user from './user'

console.log('user', user);

export const app = app => {
  app.post('/resgiter', user.register)
}