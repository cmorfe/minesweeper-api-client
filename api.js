import axios from 'axios'
import { API_URL } from './constants'

const client = axios
  .create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })

const request = ({ method = 'GET', url, token = '', data = {} }) => client
  .request({ method, url, headers: { Authorization: `Bearer ${token}` }, data })
  .then(response => response.data)
  .then(response => response.data
    ? { data: response.data, message: response.message }
    : { message: response.message })
  .catch(error =>
    error.response.data.errors
      ? { message: error.response.data.message, errors: error.response.data.errors }
      : { message: error.response.data.message })

export const get = ({ url, token }) => request({ url, token })

export const post = ({ url, token, data }) => request({ method: 'POST', url, token, data })

export const put = ({ url, token, data }) => request({ method: 'PUT', url, token, data })
