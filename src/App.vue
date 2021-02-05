<!--
 * @Author: your name
 * @Date: 2021-02-02 17:36:33
 * @LastEditTime: 2021-02-05 17:31:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \re-mall-vue\src\App.vue
-->
<template>
  <div id="app">
    <router-view />
    <main-tab-bar />
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss" scoped>
#app {
  max-width: 100vw;
}
</style>
