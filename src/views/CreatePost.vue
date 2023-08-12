<template>
  <div class="container">
    <div class="CreatePost">
      <span class="p-float-label">
        <InputText type="text" v-model="post.title" />
        <label for="username">Заголовок</label>
      </span>
      <span class="p-float-label">
        <InputText type="text" v-model="post.category" />
        <label for="username">Категория</label>
      </span>
      <span class="p-float-label">
        <InputText type="text" v-model="tagInput" />
        <label for="username">Теги</label>
      </span>
      <Editor v-model="post.text" editorStyle="height: 250px" />
      <span class="p-float-label">
        <InputText type="text" v-model="post.imageUrl" />
        <label for="username">Ссылка на изображение</label>
      </span>
    </div>
    <Button
      type="button"
      label="Создать пост"
      icon="pi pi-search"
      :loading="createPost.isLoading"
      @click="addPost"
    />
  </div>
</template>
<script setup>
import Editor from 'primevue/editor'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import { ref } from 'vue'
import { useCreatePost } from '../stores/createPost'
import router from '../router'

const createPost = useCreatePost()

const tagInput = ref('')

const post = ref({
  title: '',
  text: '',
  category: '',
  tags: [],
  imageUrl: ''
})

const addTags = () => {
  const tagsArray = tagInput.value.split(',').map((tag) => tag.trim())
  post.value.tags.push(...tagsArray)
  tagInput.value = ''
}

const addPost = async () => {
  await addTags()
  try {
    await createPost.createPost({
      title: post.value.title,
      text: post.value.text,
      category: post.value.category,
      imageUrl: post.value.imageUrl,
      tags: post.value.tags
    })
    setTimeout(() => {
      router.push('/')
    }, 300)
  } catch (err) {
    console.log(err)
  }
}
</script>
<style lang="scss" scoped>
.CreatePost {
  max-width: 800px;
  margin: 48px 0 48px 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
