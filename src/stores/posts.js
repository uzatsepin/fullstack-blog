import { defineStore } from 'pinia'
import axios from 'axios'
import { API_URL } from '../api'

export const usePostsStore = defineStore('posts', {
  state: () => ({
    allPosts: []
  }),
  actions: {
    async fetchPosts() {
      try {
        const response = await axios.get(`${API_URL}:4444/posts`)
        this.allPosts = response.data
      } catch (err) {
        console.log(err)
      }
    }
  }
})
