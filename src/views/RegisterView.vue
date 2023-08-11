<template>
  <div class="container">
    <div class="Register">
      <div class="Register__error" v-if="errorMessage.length >= 1">
        <Message severity="error" v-for="message in errorMessage" :key="message.msg"
          >{{ message.msg }}
        </Message>
      </div>
      <div class="Register__good" v-if="responseFromServer.status === 200">
        <Message severity="success"
          >{{ responseFromServer.data.fullName }}, вы зарегистрированы
        </Message>
      </div>
      <span class="p-float-label">
        <InputText id="username" v-model="userData.email" />
        <label for="username">E-mail</label>
      </span>
      <span class="p-float-label">
        <Password v-model="userData.password" inputId="password" class="Login__password" />
        <label for="password">Пароль</label>
      </span>
      <span class="p-float-label">
        <InputText id="fullName" v-model="userData.fullName" />
        <label for="username">Полное имя</label>
      </span>
      <span class="p-float-label">
        <InputText id="avatarUrl" v-model="userData.avatarUrl" />
        <label for="username">Ссылка на фото</label>
      </span>

      <Button
        type="button"
        label="Зарегистрироваться"
        icon="pi pi-user"
        :loading="loadingLogin"
        @click="register"
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
import axios from 'axios'
import { API_URL } from '../api'

const userData = ref({
  email: '',
  password: '',
  avatarUrl: '',
  fullName: ''
})
const responseFromServer = ref('')
const loadingLogin = ref(false)
const errorMessage = ref('')
const register = async () => {
  try {
    loadingLogin.value = true
    responseFromServer.value = await axios.post(`${API_URL}:4444/auth/register`, {
      email: userData.value.email,
      password: userData.value.password,
      avatarUrl: userData.value.avatarUrl,
      fullName: userData.value.fullName
    })
    loadingLogin.value = false
  } catch (err) {
    errorMessage.value = err.response.data
    loadingLogin.value = false
  }
}
</script>
<style lang="scss" scoped>
.Register {
  max-width: 500px;
  margin: 36px auto;
  display: flex;
  flex-direction: column;
  gap: 24px;

  & span {
    & input {
      width: 100%;
    }
  }

  &__password {
    width: 100%;
  }
}
</style>
