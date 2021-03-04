<template>
  <div class="back-top" @click="backTop">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BackTop",
  methods: {
    backTop() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss" scope>
.back-top img {
  width: 43px;
  height: 43px;
  opacity: 0.8;
}
</style>
