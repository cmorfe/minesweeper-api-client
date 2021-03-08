import api from './api'
import { ROUTES } from './constants'

export const login = ({ username, password }) =>
  api
    .post({
      url: ROUTES.LOGIN,
      data: { username, password }
    })

export const register = ({ username, password, password_confirmation }) =>
  api
    .post({
      url: ROUTES.REGISTER,
      data: { username, password, password_confirmation }
    })