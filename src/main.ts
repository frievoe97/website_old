// icons:
// https://thenounproject.com/numerouno/collection/materials/

import Vue from "vue";
import VueI18n from "vue-i18n";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

import AOS from "aos";
import "aos/dist/aos.css";

// eslint-disable-next-line
import { tsParticles } from "tsparticles";

import Particles from "particles.vue";

declare module "particles.vue";

Vue.config.productionTip = false;
Vue.use(Particles);

Vue.use(VueI18n);

const i18n = new VueI18n({
  fallbackLocale: "de",
});

new Vue({
  i18n,
  router,
  render: (h) => h(App),
  mounted() {
    AOS.init();
  },
}).$mount("#app");
