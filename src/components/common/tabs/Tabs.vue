<!--
 * @Author: your name
 * @Date: 2021-02-06 13:11:26
 * @LastEditTime: 2021-02-06 21:08:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \re-mall-vue\src\components\common\tabs\Tabs.vue
-->
<template>
  <div
    class="tabs space-average"
    :style="[setHeight, setBackgroundColor, setColor]"
  >
    <!-- {{ children }} -->
    <!-- <template v-for="(item, index) in children">
      {{ item }}
    </template> -->
    <slot />
  </div>
</template>

<script>
export default {
  name: "Tabs",
  data() {
    return {
      children: []
    };
  },
  props: {
    height: {
      type: String,
      default: "50px"
    },
    backgroundColor: {
      type: String,
      default: "#fff"
    },
    color: {
      type: String,
      default: "#333"
    }
  },
  computed: {
    setHeight() {
      return { height: this.height, lineHeight: this.height };
    },
    setBackgroundColor() {
      return { backgroundColor: this.backgroundColor };
    },
    setColor() {
      return { color: this.color };
    }
  },
  methods: {
    filterItem(title) {
      console.log(title);
    }
  },
  created() {
    this.children = this.$children;
    setTimeout(() => {
      let slotArr = this.$scopedSlots.default();

      console.log(slotArr[0]);
    }, 2000);

    console.log(this.$children);
  },
  watch: {
    $children: {
      handler: function(newVal, oldVal) {
        console.log(newVal, oldVal);
      },
      immediate: true
    }
  }
};
</script>

<style lang="scss" scope>
.tabs {
  text-align: center;
}
</style>
