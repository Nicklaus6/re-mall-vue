<template>
  <swiper class="swiper" ref="mySwiper" :options="mergeSwiperOptions">
    <swiper-slide
      class="swiper-slide"
      v-for="banner in banners"
      :key="banner.title"
    >
      <a :href="banner.link">
        <img
          class="swiper__img"
          v-lazy="banner.image"
          :width="banner.width"
          :height="banner.height"
          alt=""
        />
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
    }
  },
  data() {
    return {
      swiperOptions: {
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
  mounted() {
    // console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(0, 1000, false);
  },
  directives: {
    swiper: directive
  }
};
</script>

<style lang="scss" scope>
.swiper {
  width: 100%;
  height: 100%;

  &__img {
    width: 100%;
    height: 100%;
  }
  &-pagination-bullet-active {
    background-color: #d43e2e;
  }
}
</style>
