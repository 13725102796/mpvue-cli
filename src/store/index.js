// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user
  },
  getters
})


export default store
