import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

import AOS from "aos";
import "aos/dist/aos.css";
import "vue-awesome/icons";

// eslint-disable-next-line
import { tsParticles } from "tsparticles";

import Particles from "particles.vue";

declare module "particles.vue";

//import Icon from "node_modules/vue-awesome/components/Icon";
//import { Icon } from "vue-awesome";
//Vue.component("v-icon", Icon);

Vue.config.productionTip = false;
Vue.use(Particles);

new Vue({
  router,
  render: (h) => h(App),
  mounted() {
    AOS.init();
  },
}).$mount("#app");
