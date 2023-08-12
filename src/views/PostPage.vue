<template>
  <div class="container">
    <p>{{ onePost.postPage.value.title }}</p>
    <img :src="onePost.postPage.value.imageUrl" alt="" />
    <p v-for="tag in onePost.postPage.value.tags" :key="tag">{{ tag }}</p>
    <p>{{ onePost.postPage.value.category }}</p>
  </div>
</template>
<script setup>
import { usePostsStore } from '../stores/posts'
import { useRoute } from 'vue-router'

const onePost = usePostsStore()
const route = useRoute()
const postId = route.params.id

try {
  onePost.fetchOnePost(postId)
} catch (error) {
  console.error('Error fetching post:', error)
}
</script>
<style lang="scss" scoped></style>
