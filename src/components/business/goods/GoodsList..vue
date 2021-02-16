<!--
 * @Author: your name
 * @Date: 2021-02-15 15:45:59
 * @LastEditTime: 2021-02-16 15:00:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \re-mall-vue\src\components\business\goods\GoodList..vue
-->
<template>
  <div class="good-list">
    <goods-list-item
      v-for="good in goodsList"
      :key="good.iid"
      :good="good"
    ></goods-list-item>
  </div>
</template>

<script>
export default {
  name: "goodsList",
  props: {
    goodsList: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scope>
.good-list {
  padding-top: 10px;
  @include layoutNColumns();
}
</style>
