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

Vue.use(ElementUI);

////////////////////////////////////////////////////////////////
//全局方法
// Vue.prototype.axios = axios

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
