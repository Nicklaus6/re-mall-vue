<!--
 * @Author: your name
 * @Date: 2021-02-15 15:45:59
 * @LastEditTime: 2021-02-15 20:31:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \re-mall-vue\src\components\business\goods\GoodList..vue
-->
<template>
  <div class="good-list">{{ goodsList }}</div>
</template>

<script>
export default {
  name: "goodList",
  props: {
    goodsList: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style></style>
