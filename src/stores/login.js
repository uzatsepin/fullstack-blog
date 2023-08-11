import { defineStore } from 'pinia'
import axios from 'axios'
import { API_URL } from '../api'
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
  const login = async (payload) => {
    try {
      isLoading.value = true
      const response = await axios.post(`${API_URL}:4444/auth/login`, {
        ...payload
      })
      isLoading.value = false
      if (response.status === 200) {
        userData.value.token = response.data.token
        successMessage.value = 'Вы успешно авторизировались'
        localStorage.setItem(
          'userTokens',
          JSON.stringify({
            token: response.data.token
          })
        )
      }
    } catch (err) {
      console.log(err.response)
      errorMessage.value = err.response.data.message
      isLoading.value = false
    }
  }
  return { login, userData, errorMessage, isLoading, successMessage }
})
