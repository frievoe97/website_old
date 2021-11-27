import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentPage: 0, // 0 = StartPage, 1 = Imprint, 2 = Privacy Policy
  },
});
