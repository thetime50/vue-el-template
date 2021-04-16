// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//////////////////////////////////////////////////////////////////////////////
import axios from "@/api/axios.js"

//引入store
import store from './store/index.ts'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './js/directives.js'

import promise from 'es6-promise'
promise.polyfill();

import '@/js/elementPlus.js'


Vue.use(ElementUI);

////////////////////////////////////////////////////////////////

router.afterEach(function (to, from, next) {
    store.commit('SET_ROUTE_INFO', to)
})

////////////////////////////////////////////////////////////////
//全局方法

///////////////////////////////////////////////////////////////////////////

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,

  components: { App },
  template: '<App/>'
})
