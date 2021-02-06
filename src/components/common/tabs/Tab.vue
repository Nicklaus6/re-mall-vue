<!--
 * @Author: your name
 * @Date: 2021-02-06 11:48:06
 * @LastEditTime: 2021-02-06 20:28:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \re-mall-vue\src\components\common\tabs\Tab.vue
-->
<template>
  <div class="tab" @click="itemClick()" :class="{ active: isActive }">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: "Tab",
  props: {
    title: {
      type: String,
      default: "标签"
    }
  },
  data() {
    return {
      isActive: false,
      currentActive: undefined
    };
  },
  methods: {
    itemClick() {
      this.isActive = !this.isActive;
      this.$emit("itemClick", this.title);

      // this.currentActive = this.title;
      console.log(this.isActive);
      // console.log(this.currentActive); // 知道点击的是哪个 但是 点击另一个的时候 要让没被点击的 isActive都为false
    }
  },
  computed: {
    activeStyle() {
      return { color: "red" };
    }
  },
  watch: {
    currentActive: function(newVal, oldVal) {
      console.log(newVal, oldVal);
    }
  }
};
</script>

<style lang="scss" scope>
.active {
  color: red;
}
</style>
