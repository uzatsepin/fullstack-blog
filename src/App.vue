<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import { onMounted } from 'vue'
import { useLoginStore } from './stores/login'

const checkLogin = useLoginStore()

onMounted(() => {
  checkLogin.checkAuth()
})
</script>

<template>
  <HeaderComponent />
  <RouterView />
</template>

<style scoped></style>
