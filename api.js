import axios from 'axios'
import { API_URL } from './constants'

const client = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

const request = ({ method = 'GET', url, token = '', data = {} }) =>
  client
    .request({ method, url, headers: { Authorization: `Bearer ${token}` }, data })
    .then(response => ({ data: response.data.data }))
    .catch(error => ({ error: error.response.data.message }))

const get = ({ url, token }) => request({ url, token })

const post = ({ url, token, data }) => request({ method: 'POST', url, token, data })

const put = ({ url, token, data }) => request({ method: 'PUT', url, token, data })

export default { get, post, put }