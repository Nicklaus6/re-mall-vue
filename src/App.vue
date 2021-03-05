<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>

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
