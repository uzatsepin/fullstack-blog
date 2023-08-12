<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <router-link to="/" class="header__logo">
          <img class="header__logo-img" src="../assets/images/logo.svg" alt="logo" />
          <span class="header__logo-title">News</span>
        </router-link>
        <nav class="header__nav">
          <a class="header__nav-link">Новости</a>
          <a class="header__nav-link">Слухи</a>
          <a class="header__nav-link">Популярное</a>
          <a class="header__nav-link">Статистика</a>
          <router-link to="/createpost" class="header__nav-link" v-if="checkLogin.userInfo"
            >Создать статью
          </router-link>
        </nav>
        <div class="header__buttons" v-if="!checkLogin.userInfo">
          <router-link to="/login">
            <Button label="Логин" rounded />
          </router-link>
          <router-link to="/register">
            <Button label="Регистрация" severity="secondary" rounded />
          </router-link>
        </div>
        <div
          class="header__logged"
          v-if="checkLogin.userInfo"
          :class="{ islogged: checkLogin.userInfo }"
        >
          <Avatar
            v-if="
              checkLogin.userInfo.fullName &&
              checkLogin.userInfo.fullName.length > 0 &&
              !checkLogin.userInfo.avatarUrl
            "
            :label="checkLogin.userInfo.fullName[0]"
            class="mr-2"
            size="large"
            style="background-color: #2196f3; color: #ffffff"
            shape="circle"
          />
          <Avatar
            v-if="
              checkLogin.userInfo.fullName &&
              checkLogin.userInfo.fullName.length > 0 &&
              checkLogin.userInfo.avatarUrl
            "
            :image="checkLogin.userInfo.avatarUrl"
            class="mr-2"
            size="large"
            shape="circle"
          />
          <p class="header__logged-name">{{ checkLogin.userInfo.fullName }}</p>
        </div>
        <Button label="Выйти" severity="danger" @click="logout" v-if="checkLogin.userInfo" />
      </div>
    </div>
  </header>
</template>

<script setup>
import Button from 'primevue/button'
import { useLoginStore } from '../stores/login'
import Avatar from 'primevue/avatar'

const checkLogin = useLoginStore()

const logout = () => {
  window.localStorage.clear()
  window.location.assign('/')
}
</script>

<style lang="scss" scoped>
.header {
  color: #757575;
  height: 70px;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    height: 70px;
    align-items: center;
  }

  &__logo {
    display: flex;
    align-items: center;

    &-title {
      color: #1a202c;
      font-weight: bold;
      font-size: 18px;
      margin-right: 14px;
    }
  }

  &__nav {
    flex: 1 1 auto;
    padding-left: 14px;
    border-left: 1px solid #757575;
    padding-top: 14px;
    padding-bottom: 14px;
    display: flex;
    gap: 24px;

    &-link {
      transition: all 250ms ease-in-out;

      &:hover {
        color: #1a202c;
        cursor: pointer;
      }
    }
  }

  &__buttons {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 14px;
  }

  &__logged {
    display: flex;
    gap: 8px;

    &.islogged {
      margin-right: 14px;
    }
  }
}
</style>
