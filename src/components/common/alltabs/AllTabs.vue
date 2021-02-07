<!--
 * @Author: your name
 * @Date: 2021-02-07 11:44:02
 * @LastEditTime: 2021-02-07 14:07:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \re-mall-vue\src\views\Home\childComps\HomeTabs.vue
-->
<template>
  <tabs class="all__tabs" height="40px" color="red">
    <tab :title="item" class="tab1" v-for="item in titles" :key="item">
      <!-- <div v-for="item in 10" :key="item">123</div> -->
      <slot />
    </tab>
  </tabs>
</template>

<script>
import { tabs, tab } from "vant";
export default {
  name: "AllTabs",
  components: {
    tabs,
    tab
  },
  props: {
    titles: {
      type: Array,
      default: () => {}
    },
    content: {
      type: Array
    }
  }
};
</script>

<style></style>
