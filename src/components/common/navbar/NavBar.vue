<!--
 * @Author: your name
 * @Date: 2021-02-05 12:23:24
 * @LastEditTime: 2021-02-05 14:30:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \re-mall-vue\src\components\common\navbar\NavBar.vue
-->
<template>
  <div class="nav-bar space-average" :style="colorStyle">
    <div class="nav__left"><slot name="left"></slot></div>
    <div class="nav__middle"><slot name="middle"></slot></div>
    <div class="nav__right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    backgroundColor: {
      type: String,
      // default: "$color-tint" 不能用 scss变量
      default: "#ff8198"
    },
    fontColor: {
      type: String,
      default: "#fff"
    }
  },
  computed: {
    colorStyle() {
      return { backgroundColor: this.backgroundColor, color: this.fontColor };
    }
  }
};
</script>

<style lang="scss" scope>
.nav {
  &-bar {
    height: 44px;
    line-height: 44px;
    text-align: center;
  }
}
</style>
