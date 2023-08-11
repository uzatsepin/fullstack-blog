<template>
  <div class="Posts">
    <PostComponent v-for='post in allPosts' :key='post._id' :post='post'/>
  </div>
</template>

<script>
import PostComponent from '../components/PostComponent.vue'
import { usePostsStore } from '../stores/posts.js'

export default {
  components: { PostComponent },
  data() {
    return {
      allPosts: []
    }
  },
  async mounted() {
    const store = usePostsStore()
    await store.fetchPosts()
    this.allPosts = store.allPosts
  }
}
</script>
<style lang="scss" scoped>
.Posts {
  margin: 24px 0 48px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 32px;
}
</style>
