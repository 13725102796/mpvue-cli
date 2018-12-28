<template>
  <div class="container">
    <!-- <van-tag type="danger" @click="$router.push('/pages/index')">index</van-tag> -->
    <div><van-tag @click="$router.push('/pages/test1')">111</van-tag></div>
    <van-button type="default">默认按钮</van-button>
    <div><van-button type="default">默认按钮</van-button></div>
  </div>  
  
</template>
<script>
import { mapGetters, mapState } from 'vuex'
export default {

  mpType: 'page',
  computed: {
    ...mapGetters([
      'getUserName'
    ]),
    ...mapState('user',[
      'userName',
      'account'
    ])
  },
  created(){
    console.log(this.$store.state.user.userName)
    console.log(this.account)
    this.$store.dispatch('user/setUser',{userName: '123'})

    // this.getUserInfo()
  }

}
</script>

