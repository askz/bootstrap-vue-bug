// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

window.jQuery = window.$ = require('jquery')

import Tether from 'tether'
import 'popper.js'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);

import FullCalendar from 'vue-full-calendar'
Vue.use(FullCalendar)
import PortalVue from 'portal-vue'
Vue.use(PortalVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
