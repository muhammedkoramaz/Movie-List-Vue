import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueYoutube from "vue-youtube";

Vue.use(VueYoutube);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount("#app");
