import { defineStore } from 'pinia'
import axios from '../axios.js'
import { ref } from 'vue'

export const useRegisterStore = defineStore('register', () => {
  const userData = ref({
    email: '',
    password: '',
    fullName: '',
    avatarUrl: ''
  })
  const errorMessage = ref('')
  const successMessage = ref('')
  const isLoading = ref(false)
  const register = async (payload) => {
    try {
      isLoading.value = true
      const response = await axios.post(`/auth/register`, {
        ...payload
      })
      isLoading.value = false
      if (response.status === 200) {
        userData.value.token = response.data.token
        successMessage.value = `${response.data.fullName}, Вы успешно зарегистрировались`
        localStorage.setItem(
          'userTokens',
          JSON.stringify({
            token: response.data.token
          })
        )
      }
    } catch (err) {
      console.log(err.response)
      errorMessage.value = err.response.data
      isLoading.value = false
    }
  }
  return { register, userData, errorMessage, isLoading, successMessage }
})
