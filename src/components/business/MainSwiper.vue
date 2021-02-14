<!--
 * @Author: your name
 * @Date: 2021-02-05 16:12:00
 * @LastEditTime: 2021-02-14 19:40:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \re-mall-vue\src\components\common\swiper\swiper.vue
-->
<template>
  <swiper ref="mySwiper" :options="mergeSwiperOptions">
    <swiper-slide
      class="swiper-slide"
      v-for="banner in banners"
      :key="banner.title"
    >
      <a :href="banner.link">
        <img class="swiper__img" :src="banner.image" alt="" />
      </a>
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
    },
    height: {
      type: Number,
      default: 100
    }
  },
  data() {
    return {
      swiperOptions: {
        // height: 100,
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          delay: 2000,
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
    },
    mergeSwiperOptions() {
      return {
        ...this.swiperOptions,
        height: this.height
      };
    }
  },
  created() {
    this.height;
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
.swiper__img {
  width: 100%;
  height: 100%;
}
.swiper-pagination-bullet-active {
  background-color: #d43e2e;
}
</style>
