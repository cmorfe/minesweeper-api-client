import { post } from './api'
import { ROUTES } from './constants'

export const login = ({ username, password }) => post(
  {
    url: ROUTES.LOGIN,
    data: { username, password }
  }
)

export const register = ({ username, password, password_confirmation }) => post(
  {
    url: ROUTES.REGISTER,
    data: { username, password, password_confirmation }
  }
)

export const logout = ({ token }) => post(
  {
    url: ROUTES.LOGOUT,
    token: token
  }
)

export const newGame = ({ token, height, width, mines }) => post(
  {
    url: ROUTES.NEW_GAME,
    token: token,
    data: { height, width, mines }
  }
)
