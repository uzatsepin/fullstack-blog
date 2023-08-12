import { defineStore } from 'pinia'
import axios from '../axios.js'
import { ref } from 'vue'

export const useCreatePost = defineStore('createPost', () => {
  const errorMessage = ref('')
  const successMessage = ref('')
  const isLoading = ref(false)
  const createPost = async (payload) => {
    try {
      isLoading.value = true
      const response = await axios.post('/posts', {
        ...payload
      })
      isLoading.value = false
    } catch (err) {
      errorMessage.value = err
      isLoading.value = false
    }
  }
  return { createPost, errorMessage, isLoading, successMessage }
})
