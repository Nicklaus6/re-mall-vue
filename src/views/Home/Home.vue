<!--
 * @Author: your name
 * @Date: 2021-02-02 17:36:33
 * @LastEditTime: 2021-02-07 16:07:44
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
    <home-feature></home-feature>
    <home-recommend></home-recommend>

    <all-tabs :titles="titles" :content="content">
      <h1 class="div" v-for="(item, index) in 30" :key="item">{{ index }}</h1>
    </all-tabs>
  </div>
</template>

<script>
import HomeRecommend from "./childComps/HomeRecommend";
import HomeFeature from "./childComps/HomeFeature";

export default {
  name: "Home",
  components: {
    HomeRecommend,
    HomeFeature
  },

  data() {
    return {
      banners: [
        "@/assets/img/banner.png",
        "@/assets/img/banner.png",
        "@/assets/img/banner.png",
        "@/assets/img/banner.png"
      ],
      titles: ["流行", "新款", "精选"],
      content: ["流行", "新款", "精选"]
    };
  }
};
</script>
<style lang="scss" scope>
.home {
  &__container {
    height: calc(100vh - 49px);
    overflow-y: auto;
  }

  &__swiper {
    background-color: pink;
    height: 180px;
  }
}
</style>
