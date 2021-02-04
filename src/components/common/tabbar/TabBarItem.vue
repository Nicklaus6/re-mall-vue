<!--
 * @Author: your name
 * @Date: 2021-02-04 14:46:02
 * @LastEditTime: 2021-02-04 17:48:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \re-mall-vue\src\components\common\tabbar\TabBarItem.vue
-->
<template>
  <div class="tab-bar-item">
    <div class="item__icon">
      <slot name="icon"></slot>
    </div>
    <div class="item__icon--active">
      <slot name="icon--active"></slot>
    </div>
    <div class="item__text">
      <slot name="text">哈哈</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem"
};
</script>

<style lang="scss" scope>
.bar__item {
  line-height: 49px;
}
</style>
