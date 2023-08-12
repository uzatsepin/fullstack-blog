import { defineStore } from 'pinia'
import axios from '../axios.js'
import { ref } from 'vue'

export const useLoginStore = defineStore('login', () => {
  const userData = ref({
    email: '',
    password: '',
    token: ''
  })
  const errorMessage = ref('')
  const successMessage = ref('')
  const isLoading = ref(false)

  const userInfo = ref({})
  const login = async (payload) => {
    try {
      isLoading.value = true
      const response = await axios.post('/auth/login', {
        ...payload
      })
      isLoading.value = false
      if (response.status === 200) {
        userData.value.token = response.data.token
        successMessage.value = 'Вы успешно авторизировались'
        localStorage.setItem('userToken', response.data.token)
      }
    } catch (err) {
      console.log(err.response)
      errorMessage.value = err.response.data.message
      isLoading.value = false
    }
  }
  const checkAuth = async () => {
    try {
      const response = await axios.get('/auth/me')

      if (response.status === 200) {
        userInfo.value = response.data
      }
    } catch (error) {
      userInfo.value = ''
    }
  }
  return { login, checkAuth, userData, errorMessage, isLoading, successMessage, userInfo }
})
