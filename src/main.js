import Vue from 'vue'
import MpvueRouterPatch from 'mpvue-router-patch'
import App from '@/App'
import store from '@/store'

import './assets/css/init.css'




Vue.use(MpvueRouterPatch)
Vue.config.productionTip = false

const app = new Vue({
  mpType: 'app',
  store,
  ...App
})
app.$mount()

// export default {
//   // 这个字段走 app.json
//   config: {
//       // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
//       pages: ['^pages/home/index'],
//       window: {
//           // backgroundTextStyle: 'light',
//           // navigationBarBackgroundColor: '#004098',
//           // navigationBarTitleText: '世模大赛',
//           navigationBarTextStyle: '#fff',
//       },

//   }
// }
