import API from '@/api/index'

const state = {
  userName: 'sire',
  account: '123456789',
}



const actions = {
  setUser({commit,state},data){
    if(data.userName || data.account){
      if(data.userName) commit('SETUSERNAME', data.userName)
      if(data.account) commit('SETACCOUNT', data.account)
    } else {
      commit('SETUSERNAME', '')
      commit('SETACCOUNT', '')
    }  
  }
}

const mutations = {
  SETUSERNAME(state,data){
    state.userName = data
  },
  SETACCOUNT(state,data){
    state.account = data
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}