<!--
 * @Author: your name
 * @Date: 2021-02-02 17:36:33
 * @LastEditTime: 2021-02-16 21:12:34
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

    <tabs
      class="home__tabs"
      title-active-color="#ff5777"
      color="#ff8198"
      :sticky="true"
      offset-top="44"
    >
      <tab :title="item.title" v-for="item in goodsList" :key="item.type">
        <list
          :finished="finished"
          finished-text="没有更多啦😅😅"
          @load="onLoad(item.type)"
        >
          <!-- <goods-list-item
            v-for="(good, index) in goodsList"
            :key="index + good.iid"
            :good="good"
          >
          </goods-list-item> -->

          <goods-list :goods-list="showGoodList(item.type)"></goods-list>
        </list>
      </tab>
    </tabs>
  </div>
</template>

<script>
import { Tabs, Tab, List } from "vant";
import HomeRecommend from "./childComps/HomeRecommend";
import HomeFeature from "./childComps/HomeFeature";

import { getHomeMultidata, getHomeGoods } from "@/api/home";

export default {
  name: "Home",
  components: {
    Tabs,
    Tab,
    List,

    HomeRecommend,
    HomeFeature
  },

  data() {
    return {
      banners: [],
      recommends: [],

      loading: false,
      finished: false,

      goodsList: [
        { type: "pop", page: 1, list: [], title: "流行" },
        { type: "new", page: 1, list: [], title: "新款" },
        { type: "sell", page: 1, list: [], title: "精选" }
      ]
    };
  },
  computed: {},
  methods: {
    onLoad(type) {
      // 异步更新数据
      this.getGoods(type);

      // 加载状态结束
      this.loading = false;
    },

    showGoodList(type) {
      return this.goodsList.find(element => element.type === type).list;
    },

    // 获取接口数据
    getMultidata() {
      getHomeMultidata().then(res => {
        let data = res.data.data;

        this.banners = data.banner.list;
        this.recommends = data.recommend.list;
      });
    },

    getGoods(type) {
      let currentType = this.goodsList.find(element => element.type === type);
      getHomeGoods(type, currentType.page)
        .then(res => {
          const goodsList = res.data.data.list;
          currentType.page += 1;
          currentType.list.push(...goodsList);
        })
        .catch(err => {
          console.log(err.response);
          // 数据全部加载完成
          if (err.response.status === 500) {
            this.finished = true;
          }
          return err;
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
