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
        </nav>
        <div class="header__buttons">
          <router-link to="/login" class="header__buttons-login">Логин</router-link>
          <router-link to="/register" class="header__buttons-register">Регистрация</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

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

    &-login,
    &-register {
      padding: 8px 24px;
      color: #ffffff;
      display: block;
      background: #3182ce;
      border-radius: 12px;
    }

    &-login {
      background: none;
      color: #1a202c;
      border: 1px solid #3182ce;
      transition: all 250ms ease-in-out;

      &:hover {
        background: #3182ce;
        color: #ffffff;
      }
    }

    &-register {
      transition: all 250ms ease-in-out;

      &:hover {
        background: #2c5282;
      }
    }
  }
}
</style>
