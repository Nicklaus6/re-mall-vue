/*
 * @Author: your name
 * @Date: 2021-02-02 17:36:33
 * @LastEditTime: 2021-02-16 16:09:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \re-mall-vue\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueLazyload from "vue-lazyload";

import "@/assets/style/index.scss";

import "@/components";

Vue.config.productionTip = false;

Vue.use(VueLazyload, {
  preLoad: 1,
  loading: require("@/assets/img/common/placeholder.png")
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
