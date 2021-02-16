<!--
 * @Author: your name
 * @Date: 2021-02-02 17:36:33
 * @LastEditTime: 2021-02-16 15:12:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \re-mall-vue\src\views\Home.vue
-->
<template>
  <div class="home__container">
    <nav-bar class="home__nav">
      <div slot="middle">购物街</div>
    </nav-bar>
    <main-swiper class="home__swiper" :banners="banners"></main-swiper>
    <home-feature :features="recommends"></home-feature>
    <home-recommend></home-recommend>

    <tabs class="all__tabs" height="40px" color="red">
      <tab :title="item.title" v-for="item in goodsList" :key="item.type">
        <goods-list :goods-list="showGoodList(item.type)"></goods-list>
      </tab>
    </tabs>
  </div>
</template>

<script>
import { tabs, tab } from "vant";
import HomeRecommend from "./childComps/HomeRecommend";
import HomeFeature from "./childComps/HomeFeature";

import { getHomeMultidata, getHomeGoods } from "@/api/home";

export default {
  name: "Home",
  components: {
    tabs,
    tab,
    HomeRecommend,
    HomeFeature
  },

  data() {
    return {
      banners: [],
      recommends: [],
      goodsList: [
        { type: "pop", page: 1, list: [], title: "流行" },
        { type: "new", page: 1, list: [], title: "新款" },
        { type: "sell", page: 1, list: [], title: "精选" }
      ]
    };
  },
  computed: {},
  methods: {
    getMultidata() {
      getHomeMultidata().then(res => {
        let data = res.data.data;

        this.banners = data.banner.list;
        this.recommends = data.recommend.list;
      });
    },

    showGoodList(type) {
      return this.goodsList.find(element => element.type === type).list;
    },

    getGoods(type) {
      let currentType = this.goodsList.find(element => element.type === type);
      getHomeGoods(type, currentType.page).then(res => {
        const goodsList = res.data.data.list;
        currentType.page += 1;
        currentType.list.push(...goodsList);
      });
    }
  },
  created() {
    this.getMultidata();

    this.getGoods("pop");
    this.getGoods("new");
    this.getGoods("sell");
  }
};
</script>
<style lang="scss" scope>
.home {
  &__container {
    height: calc(100vh - 49px);
    overflow-y: auto;
  }

  &__swiper {
    height: 200px;
  }
}
</style>
