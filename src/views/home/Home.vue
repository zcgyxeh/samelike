<template>
<div id="home">

  <nav-bar class="home-nav"><div slot="center">samelike</div></nav-bar>
  <home-swiper :banners="banners"></home-swiper>
  <recommend-view :recomends="recommends"></recommend-view>
  <feature-view/>
  <tab-control :titles="['流行','精选','时尚']"></tab-control>

  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</div>
</template>

<script>
//home下的组件
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";
import TabControl from "components/common/tabControl/TabControl";

import {getHomeMultidata} from "network/home";



export default {
  name: "home",
  components:{
    // Swiper,
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl
  },
  // 保存数据
  data(){
    return{
      banners:[],
      recommends:[]
      // result:null
    }
  },
  created() {
    //1.请求多个数据
    getHomeMultidata().then(res =>{
      // console.log(res);
      // this.result = res;
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  }
}
</script>

<style scoped>
#home{
  padding-top: 44px;
}
.home-nav{
  background-color:var(--color-tint);
  color: white;
  font-size: large;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
</style>
