export default {
  getUserName: (state,getters,data)=>{
    return state.user.userName + 'getter'
  },
  getAccount: (state,getters,data)=> {
    return state.user.account
  }
}