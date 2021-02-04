<!--
 * @Author: your name
 * @Date: 2021-02-02 17:36:33
 * @LastEditTime: 2021-02-04 20:28:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \re-mall-vue\src\App.vue
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <main-tab-bar />
  </div>
</template>

<script>
// import MainTabBar from "@/components/business/MainTabBar";
export default {
  name: "app",
  components: {
    // MainTabBar
  }
};
</script>
