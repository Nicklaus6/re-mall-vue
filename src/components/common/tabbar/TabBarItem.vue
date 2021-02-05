<!--
 * @Author: your name
 * @Date: 2021-02-04 14:46:02
 * @LastEditTime: 2021-02-05 11:42:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \re-mall-vue\src\components\common\tabbar\TabBarItem.vue
-->
<template>
  <div class="tab-bar-item" @click="itemClick()">
    <div class="item__icon" v-show="!isActive">
      <slot name="icon"></slot>
    </div>
    <div class="item__icon--active" v-show="isActive">
      <slot name="icon--active"></slot>
    </div>
    <div class="item__text" :style="activeStyle">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "#ff5777"
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    }
  }
};
</script>

<style lang="scss" scope>
.item {
  &__container {
    line-height: 49px;
  }
  &__icon img,
  &__icon--active img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-top: 5px;
  }
  &__text {
    font-size: 12px;
    margin-top: 3px;
    color: #333;
  }
  // &__text.active {
  //   color: $color-high-text;
  // }
}
</style>
