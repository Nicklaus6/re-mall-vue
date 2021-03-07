<template>
  <div class="home-feature space-average">
    <div class="feature__item" v-for="feature in features" :key="feature.sort">
      <a :href="feature.link">
        <img
          class="feature__img"
          :src="feature.image"
          width="70"
          height="70"
          alt=""
        />
        <div class="feature__text">{{ feature.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeFeature",
  props: {
    features: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scope>
.home-feature {
  margin-top: 10px;
  font-size: 14px;
  padding-bottom: 20px;
  border-bottom: 10px solid #eee;
}
.feature {
  &__item {
    text-align: center;
  }
  &__img {
    width: 70px;
    height: 70px;
    object-fit: fill;
  }
  &__text {
    margin-top: 10px;
  }
}
</style>
