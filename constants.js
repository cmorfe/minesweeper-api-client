export const API_URL = process.env.REACT_APP_API_URL

export const ROUTES = {
  REGISTER: `/register`,
  LOGIN: `/login`,
  LOGOUT: `/logout`,
  NEW_GAME: `/boards`,
  LOAD_GAME: (id) => `/boards/${id}`,
  SAVE_GAME: (id) => `/boards/${id}`,
  LOAD_GAMES: `/boards`,
  MARK_SQUARE: (boardId, squareId) => `/boards/${boardId}/squares/${squareId}/mark`,
  OPEN_SQUARE: (boardId, squareId) => `/boards/${boardId}/squares/${squareId}/open`,
}
