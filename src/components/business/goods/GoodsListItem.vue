<!--
 * @Author: your name
 * @Date: 2021-02-15 21:01:43
 * @LastEditTime: 2021-02-16 21:54:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \re-mall-vue\src\components\business\goods\GoodListItem.vue
-->
<template>
  <div class="good">
    <img class="good__img" v-lazy="good.show.img" alt="" />
    <div class="good__info ">
      <p class="good__title text-ellipsis">{{ good.title }}</p>
      <span class="good__price">￥{{ good.price }}</span>
      <span class="good__collect">{{ good.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    good: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="scss" scope>
.good {
  margin-bottom: 10px;

  &__img {
    width: 100%;
    border-radius: 10px;
  }

  &__info {
    font-size: 12px;
    text-align: center;
  }

  &__price {
    color: $color-high-text;
    margin-right: 20px;
  }

  &__collect {
    position: relative;
  }

  &__collect::before {
    content: "";
    width: 14px;
    height: 14px;
    position: absolute;
    left: -14px;
    background: url("~@/assets/img/common/collect.svg") 0/14px;
  }
}
</style>
