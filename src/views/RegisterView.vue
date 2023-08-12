<template>
  <div class="container">
    <div class="Register">
      <div class="Register__error" v-if="registerStore.errorMessage.length >= 1">
        <Message
          sticky
          severity="error"
          v-for="message in registerStore.errorMessage"
          :key="message.msg"
          >{{ message.msg }}
        </Message>
      </div>
      <div class="Register__good" v-if="registerStore.successMessage">
        <Message sticky severity="success">Вы успешно зарегистрировались</Message>
      </div>
      <h3>Введите E-mail:</h3>
      <span class="p-float-label">
        <InputText id="username" v-model="userInfo.email" />
        <label for="username">E-mail</label>
      </span>
      <h3>Введите пароль:</h3>
      <span class="p-float-label">
        <Password v-model="userInfo.password" inputId="password" />
        <label for="password">Password</label>
      </span>
      <h3>Введите ваше имя:</h3>
      <span class="p-float-label">
        <InputText id="fullName" v-model="userInfo.fullName" />
        <label for="username">Полное имя</label>
      </span>
      <h3>Вставьте ссылку на аватар</h3>
      <span class="p-float-label">
        <InputText id="avatarUrl" v-model="userInfo.avatarUrl" />
        <label for="username">Ссылка на фото</label>
      </span>

      <Button
        type="button"
        label="Зарегистрироваться"
        icon="pi pi-user"
        :loading="registerStore.isLoading"
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
import { useRegisterStore } from '../stores/register'

const userInfo = ref({
  email: '',
  password: '',
  avatarUrl: '',
  fullName: ''
})

const registerStore = useRegisterStore()
const register = async () => {
  await registerStore.register({
    email: userInfo.value.email,
    password: userInfo.value.password,
    avatarUrl: userInfo.value.avatarUrl,
    fullName: userInfo.value.fullName
  })
}
</script>
<style lang="scss" scoped>
.Register {
  max-width: 400px;
  margin: 36px auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border: 1px solid #d3d3d3;
  padding: 16px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

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
