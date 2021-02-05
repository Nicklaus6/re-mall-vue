<!--
 * @Author: your name
 * @Date: 2021-02-05 16:12:00
 * @LastEditTime: 2021-02-05 22:56:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \re-mall-vue\src\components\common\swiper\swiper.vue
-->
<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="banner in banners" :key="banner">
      <img src="banner" alt="" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "MainSwiper",
  props: {
    banners: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        }
        // Some Swiper option/callback...
      }
    };
  },
  components: {
    Swiper,
    SwiperSlide
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(0, 1000, false);
  },
  directives: {
    swiper: directive
  }
};
</script>

<style lang="scss" scope>
.swiper-pagination-bullet-active {
  background-color: #d43e2e;
}
</style>
