import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入vant移动端组件库
import Vant from 'vant'
import 'vant/lib/index.css'

// 引入全局样式
import './styles/index.less'

// 自动设置 rem 基准值 （HTML标签的字体大小）(注意：行内样式的px不能转)
import 'amfe-flexible'

// 全局注册vant
Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
