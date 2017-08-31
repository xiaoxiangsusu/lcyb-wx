// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import YDUI from 'vue-ydui'
import axios from 'axios'
import 'vue-ydui/dist/ydui.rem.css';
import '@/assets/css/common.less'
import '@/assets/css/style.less'
import '@/assets/js/rem'
import '@/assets/js/utils'

Vue.use(YDUI)
Vue.config.productionTip = false

// axios 配置
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.transformRequest = [function (data) {
  let ret = '';
  for (let it in data) {
    ret += `${encodeURIComponent(it)}=${encodeURIComponent(data[it])}&`
  }
  return ret;
}]
Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  render: h => h(App)
})
