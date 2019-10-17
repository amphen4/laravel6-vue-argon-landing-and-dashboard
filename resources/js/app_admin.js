/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue'
import App from './argon-admin/App.vue'
import router from './argon-admin/router'
import './argon-admin/registerServiceWorker'
import ArgonDashboard from './argon-admin/plugins/argon-dashboard'

Vue.config.productionTip = false

Vue.use(ArgonDashboard)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
