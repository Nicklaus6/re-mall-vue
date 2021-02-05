<!--
 * @Author: your name
 * @Date: 2021-02-04 17:51:42
 * @LastEditTime: 2021-02-05 11:50:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \re-mall-vue\src\components\business\MainTabBar.vue
-->
<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="hotpink">
      <img slot="icon" src="@/assets/img/tabbar/home.svg" alt="" />
      <img
        slot="icon--active"
        src="@/assets/img/tabbar/home_active.svg"
        alt=""
      />
      <p slot="text">首页</p>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="icon" src="@/assets/img/tabbar/category.svg" alt="" />
      <img
        slot="icon--active"
        src="@/assets/img/tabbar/category_active.svg"
        alt=""
      />
      <p slot="text">分类</p>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="icon" src="@/assets/img/tabbar/cart.svg" alt="" />
      <img
        slot="icon--active"
        src="@/assets/img/tabbar/cart_active.svg"
        alt=""
      />
      <p slot="text">购物车</p>
    </tab-bar-item>
    <tab-bar-item path="profile">
      <img slot="icon" src="@/assets/img/tabbar/profile.svg" alt="" />
      <img
        slot="icon--active"
        src="@/assets/img/tabbar/profile_active.svg"
        alt=""
      />
      <p slot="text">我的</p>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
export default {
  name: "MainTabBar",
  components: {}
};
</script>

<style lang="scss" scope></style>
