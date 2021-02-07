<!--
 * @Author: your name
 * @Date: 2021-02-07 15:55:27
 * @LastEditTime: 2021-02-07 16:06:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \re-mall-vue\src\views\Home\childComps\HomeFeature.vue
-->
<template>
  <div class="home-feature space-average">
    <div class="feature__item" v-for="(item, index) in 4" :key="item">
      <a href="">
        <img class="feature__img" src="@/assets/img/banner.png" alt="" />
        <div class="feature__text">{{ index }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeFeature"
};
</script>

<style lang="scss" scope>
.home-feature {
  margin-top: 10px;
  font-size: 14px;
  padding-bottom: 30px;
  border-bottom: 10px solid #eee;
}
.feature {
  &__item {
    text-align: center;
  }
  &__img {
    width: 80px;
    height: 80px;
    object-fit: fill;
  }
}
</style>
