<template>
  <div id="app">
<!--有加载动画-->
    <transition name="fade">
      <router-view />
    </transition>

<!--    <router-view />-->



    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search"  to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="friends-o"  to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="star-o"  to="/tuan">团</van-tabbar-item>
      <van-tabbar-item icon="setting-o"  to="/profile">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      // active: 0,
    };
  },
  computed:{
    active:{
        get(){
          switch (this.$route.path){
          case '/home':
            return 0;
          case '/category':
            return 1;
          case '/cart':
            return 2;
          case '/tuan':
            return 3;
          case '/profile':
            return 4;
          default:
            break;
            }
      },
      set(){},

    }
  },
}
</script>

<style>
@import "assets/css/base.css";

.fade-enter-active, .fade-leave-avtive {
  transition: opacity 1.5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>
