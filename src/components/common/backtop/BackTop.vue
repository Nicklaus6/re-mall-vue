<template>
  <div class="back-top" @click="backTop(speed)">
    <img
      :class="{ show: scrollTop > show }"
      :style="{
        width: imgWidth,
        height: imgHeight
      }"
      v-lazy="backTopImg"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: "BackTop",
  data() {
    return {
      scrollTop: 0
    };
  },
  props: {
    show: {
      type: Number,
      default: 300
    },
    backTopImg: {
      type: String
    },
    imgWidth: {
      type: String,
      default: "10px"
    },
    imgHeight: {
      type: String,
      default: "10px"
    },
    speed: {
      type: Number,
      default: 5
    }
  },
  methods: {
    backTop(speed) {
      (function smoothScroll() {
        let currentScroll =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
          window.requestAnimationFrame(smoothScroll);
          window.scroll(0, currentScroll - currentScroll / speed);
        }
      })();
    }
  },
  mounted() {
    window.addEventListener("scroll", () => {
      this.scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
    });
  },
  destroyed() {
    window.removeEventListener("scroll", () => {
      this.scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
    });
  }
};
</script>

<style lang="scss" scope>
.back-top {
  img {
    object-fit: fill;
    opacity: 0;
    transition: opacity 0.6s;
  }
  img.show {
    opacity: 0.9;
  }
}
</style>
