<!--
 * @Author: your name
 * @Date: 2021-02-02 17:36:33
 * @LastEditTime: 2021-02-07 11:05:31
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
    <home-recommend></home-recommend>
    <tabs class="home__tabs" height="40px" color="#666">
      <tab title="流行" class="tab1">内容1</tab>
      <tab title="新款" class="tab2">内容2</tab>
      <tab title="精选" class="tab3">内容3</tab>
    </tabs>
    <h1 v-for="item in 80" :key="item">home</h1>
  </div>
</template>

<script>
import HomeRecommend from "./childComps/HomeRecommend";
import { tabs, tab } from "vant";

export default {
  name: "Home",
  components: {
    HomeRecommend,
    tabs,
    tab
  },

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
