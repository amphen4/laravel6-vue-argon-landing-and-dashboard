/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');


import Vue from "vue";
import App from "./argon-landing/App.vue";
import router from "./argon-landing/router";
import Argon from "./argon-landing/plugins/argon-kit";
import './argon-landing/registerServiceWorker'

Vue.config.productionTip = false;
Vue.use(Argon);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

