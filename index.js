import { get, post, put } from './api.js'
import { ROUTES } from './constants.js'

export const login = async ({ username, password }) => {
  const { data, message, errors } = await post({
    url: ROUTES.LOGIN,
    data: { username, password }
  })

  return data
    ? { token: data.access_token }
    : errors
      ? { errorMsg: message, errors }
      : { errorMsg: message }
}

export const register = async ({ username, password, password_confirmation }) => {
  const { data, message, errors } = await post({
    url: ROUTES.REGISTER,
    data: { username, password, password_confirmation }
  })

  return data
    ? { token: data.access_token }
    : { errorMsg: message, errors }
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
      ? { errorMsg: message, errors }
      : { errorMsg: message }
}

export const loadGame = async ({ token, boardId }) => {
  const { data, message } = await get({
    url: ROUTES.LOAD_GAME(boardId),
    token,
  })

  return data
    ? { loadedBoard: data }
    : { errorMsg: message }
}

export const saveGame = async ({ token, boardId, time }) => {
  const { data, message } = await put({
    url: ROUTES.SAVE_GAME(boardId),
    token,
  })

  return data
    ? {}
    : { errorMsg: message }
}

export const getBoards = async ({ token }) => {
  const { data, message } = await get({
    url: ROUTES.LOAD_GAMES,
    token,
  })

  return data
    ? { loadedBoards: data }
    : { errorMsg: message }
}

export const markSquare = async ({ token, boardId, squareId }) => {
  const { data, message } = await post({
    url: ROUTES.MARK_SQUARE(boardId, squareId),
    token
  })

  return data
    ? { loadedSquare: data }
    : { errorMsg: message, errors }
}

export const openSquare = async ({ token, boardId, squareId }) => {
  const { data, message } = await post({
    url: ROUTES.OPEN_SQUARE(boardId, squareId),
    token
  })

  return data
    ? { loadedSquare: data }
    : { errorMsg: message }
}

//console.log(await newGame({ token: '40|uRrPRvzygFzfHiQmEac7rUub8gEiYzm3vAXNXxGW', height: 2, width: 2, mines: 1 }))
console.log(await logout({ token: '40|uRrPRvzygFzfHiQmEac7rUub8gEiYzm3vAXNXxGW' }))
//console.log(await login({ username: 'cmorfe', password: 1}))