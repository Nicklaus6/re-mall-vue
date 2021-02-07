<!--
 * @Author: your name
 * @Date: 2021-02-02 17:36:33
 * @LastEditTime: 2021-02-07 14:51:51
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
    <all-tabs :titles="titles" :content="content">
      <div class="div" v-for="(item, index) in 20" :key="item">{{ index }}</div>
    </all-tabs>
  </div>
</template>

<script>
import HomeRecommend from "./childComps/HomeRecommend";

export default {
  name: "Home",
  components: {
    HomeRecommend
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
  }

  &__swiper {
    background-color: pink;
    height: 180px;
  }
}
</style>
