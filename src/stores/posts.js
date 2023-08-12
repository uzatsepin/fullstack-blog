import { ref } from 'vue'
import axios from '../axios.js'

export function usePostsStore() {
  const allPosts = ref([])
  const isLoading = ref(false)
  const postPage = ref({})

  async function fetchPosts() {
    try {
      isLoading.value = true
      const response = await axios.get('/posts')
      allPosts.value = response.data
      isLoading.value = false
    } catch (err) {
      console.log(err)
    }
  }

  async function fetchOnePost(id) {
    try {
      isLoading.value = true
      const response = await axios.get(`/posts/${id}`)
      postPage.value = response.data
    } catch (err) {
      console.log(err)
    }
  }

  return {
    allPosts,
    fetchPosts,
    fetchOnePost,
    postPage
  }
}
