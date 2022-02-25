import Vue from 'vue'
import App from './App.vue'
import router from  '@/router'
import 'vant/lib/index.css';
import './vant';

Vue.config.productionTip = false


// 过滤器 过滤金额
Vue.filter('filterMoney',(val)=>{
  return '￥ '+ val.toFixed(2) +' 元 ';
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
