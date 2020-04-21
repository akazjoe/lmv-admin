import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import * as charts from 'echarts';



Vue.use(ElementUI);
Vue.use(charts);

Vue.config.productionTip = false;

// Vue.prototype.bus = new Vue();  //此处全局注册一个Vue作为事件中心
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

// axios({
//   method: 'get',
//   url: 'http://www.mylaravelcms.com/api/menu'
// }).then(function(resp){
//   window.console.log(resp.data);
// }).catch(resp => {
//   // console.log(resp);
//   window.console.log('请求失败：'+resp.status+','+resp.statusText);
// });

Vue.axios.get('http://www.httpbin.org/anything').then((res => {
  window.console.log(res)
}))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
