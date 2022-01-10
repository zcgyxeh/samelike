<template>
  <div id="app">
    <router-view></router-view>
<!--    <main-tab-bar></main-tab-bar>-->

    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="star-o" to="/tuan">团</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/profile">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// import MainTabBar from "components/content/mainTabbar/MainTabBar";

import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      active: 0,
    };
  },
}
</script>

<style>
@import "assets/css/base.css";
</style>
