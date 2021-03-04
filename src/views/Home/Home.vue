<template>
  <div class="home__container" ref="home">
    <nav-bar class="home__nav">
      <div slot="middle">购物街</div>
    </nav-bar>

    <pull-refresh
      v-model="refreshing"
      @refresh="onRefresh()"
      success-text="刷新成功哒~"
    >
      <main-swiper class="home__swiper" :banners="banners"></main-swiper>
      <home-feature :features="recommends"></home-feature>
      <home-recommend></home-recommend>

      <tabs
        class="home__tabs"
        title-active-color="#ff5777"
        color="#ff8198"
        :sticky="true"
        offset-top="44"
        @click="tabClick"
      >
        <tab
          :title="item.title"
          v-for="item in goodsList"
          :key="item.type"
          :currentType="item.type"
        >
          <list
            v-model="loading"
            :finished="finished"
            loading-text="加载中~"
            finished-text="没有更多啦😅😅"
            @load="onLoad()"
            :error.sync="error"
            error-text="请求失败，点击重新加载"
          >
            <!-- <goods-list-item
            v-for="(good, index) in goodsList"
            :key="index + good.iid"
            :good="good"
          >
          </goods-list-item> -->

            <goods-list :goods-list="showGoodList()"></goods-list>
          </list>
        </tab>
      </tabs>
    </pull-refresh>
    <back-top class="back-top" v-show="showBackTop" @click.native="backTop">
      <img src="@/assets/img/common/top.png" alt="" />
    </back-top>
  </div>
</template>

<script>
import { Tabs, Tab, List, PullRefresh } from "vant";
import HomeRecommend from "./childComps/HomeRecommend";
import HomeFeature from "./childComps/HomeFeature";

import { getHomeMultidata, getHomeGoods } from "@/api/home";

export default {
  name: "Home",
  components: {
    Tabs,
    Tab,
    List,
    PullRefresh,

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
      ],

      currentTabIndex: 0,
      currentTabType: "pop",

      loading: false,
      finished: false,
      error: false,
      refreshing: false,

      scrollTop: 0
    };
  },
  computed: {
    showBackTop() {
      return this.scrollTop > 300 || this.scrollTop > 300;
    }
  },
  methods: {
    onLoad() {
      // 刷新数据
      if (this.refreshing) {
        this.goodsList.forEach(item => {
          item.list = [];
        });

        this.refreshing = false;
      }

      // 异步更新数据
      this.getGoods("pop");
      this.getGoods("new");
      this.getGoods("sell");

      // 加载状态结束
      this.loading = false;

      // 数据全部加载完成
      // if (this.list.length >= 40) {
      //   this.finished = true;
      // }
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true,表示处于加载状态
      this.loading = true;
      this.onLoad();
    },

    tabClick(name, currentType) {
      this.currentTabIndex = name;
      this.currentTabType = currentType;
    },

    showGoodList() {
      return this.goodsList[this.currentTabIndex].list;
    },

    backTop() {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
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
      let currentItem = this.goodsList.find(element => element.type === type);

      getHomeGoods(type, currentItem.page)
        .then(res => {
          const goodsList = res.data.data.list;

          currentItem.list.push(...goodsList);
          currentItem.page += 1;
        })
        .catch(err => {
          console.log(err.message);

          // 列表数据加载失败
          if (err.message.indexOf("timeout") !== -1) {
            this.error = true;
          }

          // 数据全部加载完成
          if (err.response && err.response.status === 500) {
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
  },
  deactivated() {},
  mounted() {
    console.log("home mounted");

    window.addEventListener("scroll", () => {
      this.scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
    });
  },
  destroyed() {
    console.log("home destoryed");

    window.removeEventListener("scroll", () => {
      this.scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
    });
  }
};
</script>

<style lang="scss" scope>
.home {
  &__container {
    height: calc(100% - 49px);
    // overflow-y: auto;  设置overflow会让 sticky 失效
  }

  &__swiper {
    height: 200px;
  }
}
.back-top {
  position: fixed;
  bottom: 46px;
  right: 8px;
}
</style>
