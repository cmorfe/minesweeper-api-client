import axios from 'axios'
import { API_URL } from './constants'

const client = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

const request = ({ method = 'GET', url, token = '', data = {} }) => client
  .request({ method, url, headers: { Authorization: `Bearer ${token}` }, data })
  .then(response => {
    let data = response.data

    return data.data
      ? { data: data.data }
      : { message: data.message}
  })
  .catch(error => {
    let data = error.response.data

    return data.errors
      ? { errors: data.errors, message: data.message }
      : { message: data.message }
  })

export const get = ({ url, token }) => request({ url, token })

export const post = ({ url, token, data }) => request({ method: 'POST', url, token, data })

export const put = ({ url, token, data }) => request({ method: 'PUT', url, token, data })
