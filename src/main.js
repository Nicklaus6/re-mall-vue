import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
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
