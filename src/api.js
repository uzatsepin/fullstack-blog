import axios from 'axios'
import { useLoginStore } from './stores/login'

export const API_URL = 'http://46.175.144.91'

axios.interceptors.request.use((config) => {
  const loginStore = useLoginStore()
  let params = new URLSearchParams()
  params.append('login', loginStore.userData.token)
  config.params = params
  return config
})
