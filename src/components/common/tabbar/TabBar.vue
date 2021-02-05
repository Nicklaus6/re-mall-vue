<!--
 * @Author: your name
 * @Date: 2021-02-04 14:45:52
 * @LastEditTime: 2021-02-05 17:05:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \re-mall-vue\src\components\common\tabbar\TabBar.vue
-->
<template>
  <div class="tab-bar space-average">
    <slot />
  </div>
</template>

<script>
export default {
  name: "TabBar"
};
</script>

<style lang="scss" scope>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  background-color: #f6f6f6;
  height: 49px;
  border-top: 1px solid #eee;
  box-shadow: 0 -1px 1px rgba(150, 150, 150, 0.8);
}
</style>
