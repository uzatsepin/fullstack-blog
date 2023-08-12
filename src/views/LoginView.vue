<template>
  <div class="container">
    <div class="Login">
      <Message severity="error" v-if="loginStore.errorMessage"
        >{{ loginStore.errorMessage }}
      </Message>
      <Message severity="success" v-if="loginStore.successMessage"
        >{{ loginStore.successMessage }}
      </Message>
      <h3>Введите логин:</h3>
      <div class="p-inputgroup flex-1">
        <span class="p-inputgroup-addon">
          <i class="pi pi-user"></i>
        </span>
        <InputText placeholder="Email" v-model="userInfo.email" />
      </div>
      <h3>Введите пароль:</h3>
      <div class="p-inputgroup flex-1">
        <span class="p-inputgroup-addon">
          <i class="pi pi-lock-open"></i>
        </span>
        <Password v-model="userInfo.password" toggleMask placeholder="******" />
      </div>
      <Button
        type="button"
        label="Логин"
        icon="pi pi-user"
        :loading="loginStore.isLoading"
        @click="login"
      />
    </div>
  </div>
</template>
<script setup>
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'
import Message from 'primevue/message'
import { ref } from 'vue'
import { useLoginStore } from '../stores/login'
import router from '../router'

const userInfo = ref({
  email: '',
  password: ''
})
const loginStore = useLoginStore()
const login = async () => {
  try {
    await loginStore.login({
      email: userInfo.value.email,
      password: userInfo.value.password
    })
    setTimeout(() => {
      window.location.assign('/')
    }, 3000)
  } catch (err) {
    console.log(err)
  }
}
</script>
<style lang="scss" scoped>
.Login {
  max-width: 400px;
  margin: 36px auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border: 1px solid #d3d3d3;
  padding: 16px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
