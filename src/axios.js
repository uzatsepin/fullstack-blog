import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://46.175.145.114:4444'
})

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem('userToken')
  return config
})

export default instance
