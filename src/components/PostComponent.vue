<template>
  <div class="Post">
    <div class="Post__wrapper">
      <div class="Post__image">
        <img :src="post.imageUrl" alt="Post Image" />
        <!--        <div class="Post__image-tag" v-for='tag in post.tags' :key='tag'>{{ tag }}</div>-->
      </div>
      <div class="Post__content">
        <p class="Post__category">{{ post.category }}</p>
        <h2 class="Post__title">{{ post.title }}</h2>
        <p class="Post__text" v-html="post.text"></p>
      </div>
      <div class="Post__info">
        <a href="#" class="Post__info-btn" @click="openPost">Читать...</a>
        <div class="Post__info-views">{{ post.viewsCount }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from '../router'

const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})

const openPost = () => {
  router.push(`/posts/${props.post._id}`)
}
</script>
<style lang="scss" scoped>
.Post {
  padding: 14px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  max-width: 360px;
  border-radius: 10px;

  &__title {
    margin-top: 8px;
  }

  &__image {
    position: relative;

    & img {
      width: 100%;
      object-fit: contain;
    }

    &-tag {
      position: absolute;
      top: 8px;
      right: 8px;
      padding: 8px;
      background-color: #85dca8;
      border-radius: 10px;
    }
  }

  &__category {
    padding: 0;
    margin: 8px 0 0 0;
    color: #757575;
  }

  &__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;

    &-btn {
      color: black;
      display: block;
      padding: 8px 24px;
      background: #81a1c1;
      border-radius: 10px;
      color: #ffffff;
      transition: all 250ms ease-in-out;

      &:hover {
        background: #5e81ac;
      }
    }

    &-views {
      display: flex;
      align-items: center;

      &::before {
        content: '';
        display: flex;
        width: 24px;
        height: 24px;
        background-image: url('../assets/images/views-icon.svg');
        background-size: cover;
        margin-right: 8px;
      }
    }
  }
}
</style>
