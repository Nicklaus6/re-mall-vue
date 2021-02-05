<!--
 * @Author: your name
 * @Date: 2021-02-02 17:36:33
 * @LastEditTime: 2021-02-05 22:56:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \re-mall-vue\src\views\Home.vue
-->
<template>
  <div class="home__container">
    <nav-bar class="home__nav">
      <div slot="middle">购物街</div>
    </nav-bar>
    <main-swiper class="home__swiper" :banners="banners"></main-swiper>
    <h1 v-for="item in 80" :key="item">home</h1>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      banners: [
        "@/assets/img/banner.png",
        "@/assets/img/banner.png",
        "@/assets/img/banner.png",
        "@/assets/img/banner.png"
      ]
    };
  }
};
</script>
<style lang="scss" scope>
.home {
  &__swiper {
    background-color: pink;
    height: 180px;
  }
}
</style>
