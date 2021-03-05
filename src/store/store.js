import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    scrollTop: 0
  },
  mutations: {
    scrollChange(state, val) {
      state.scrollTop = val;
    }
  },
  actions: {},
  modules: {}
});
