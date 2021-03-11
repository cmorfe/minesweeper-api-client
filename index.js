import { get, post, put } from './api'
import { ROUTES } from './constants'

export const login = async ({ username, password }) => {
  const { data, message, errors } = await post({
    url: ROUTES.LOGIN,
    data: { username, password }
  })

  return data
    ? { token: data.access_token }
    : errors
      ? { message, errors }
      : { message }
}

export const register = async ({ username, password, password_confirmation }) => {
  const { data, message, errors } = await post({
    url: ROUTES.REGISTER,
    data: { username, password, password_confirmation }
  })

  return data
    ? { token: data.access_token, message }
    : { errors }
}

export const logout = async ({ token }) => {
  await post({
    url: ROUTES.LOGOUT,
    token
  })

  return {}
}

export const newGame = async ({ token, height, width, mines }) => {
  const { data, message, errors } = await post({
    url: ROUTES.NEW_GAME,
    token,
    data: { height, width, mines }
  })

  return data
    ? { board: data }
    : errors
      ? { message, errors }
      : { message }
}

export const loadGame = async ({ token, boardId }) => {
  const { data, message } = await get({
    url: ROUTES.LOAD_GAME(boardId),
    token,
  })

  return data
    ? { loadedBoard: data }
    : { message }
}

export const saveGame = async ({ token, boardId, time }) => {
  const { data, message } = await put({
    url: ROUTES.SAVE_GAME(boardId),
    token,
    data: { time }
  })

  return data
    ? {}
    : errors
      ? { message, errors }
      : { message }
}

export const getBoards = async ({ token }) => {
  const { data, message } = await get({
    url: ROUTES.LOAD_GAMES,
    token,
  })

  return data
    ? { loadedBoards: data }
    : { message }
}

export const markSquare = async ({ token, boardId, squareId }) => {
  const { data, message } = await post({
    url: ROUTES.MARK_SQUARE(boardId, squareId),
    token
  })

  return data
    ? { loadedSquare: data }
    : { message }
}

export const openSquare = async ({ token, boardId, squareId }) => {
  const { data, message } = await post({
    url: ROUTES.OPEN_SQUARE(boardId, squareId),
    token
  })

  return data
    ? { loadedSquare: data }
    : { message }
}
