<template>
<div id="home">
<!--  顶部条-->
  <nav-bar class="home-nav">
    <div slot="left"><svg t="1639722542317" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="824" width="28" height="28"><path d="M900 730h-68V485.571c0-159.274-116.37-291.349-268.721-315.891 5.532-10.53 8.721-22.897 8.721-36.128C572 95.14 545.137 64 512 64s-60 31.14-60 69.553c0 13.231 3.188 25.598 8.721 36.128C308.37 194.223 192 326.298 192 485.571V730h-68c-33.137 0-60 26.863-60 60s26.863 60 60 60h776c33.137 0 60-26.863 60-60s-26.863-60-60-60zM592 880c0 44.183-35.817 80-80 80s-80-35.817-80-80" fill="#13227a" p-id="825"></path></svg></div>
    <div slot="center">samelike</div>
    <div slot="right"><svg t="1639722641826" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1223" width="28" height="28"><path d="M942.427 857.574L775.792 690.939C823.699 625.691 852 545.152 852 458c0-217.6-176.4-394-394-394S64 240.4 64 458s176.4 394 394 394c87.152 0 167.691-28.301 232.939-76.208l166.635 166.635c23.432 23.431 61.422 23.431 84.853 0 23.431-23.432 23.431-61.422 0-84.853zM458 762c-167.895 0-304-136.105-304-304s136.105-304 304-304 304 136.105 304 304-136.105 304-304 304z" fill="#13227a" p-id="1224"></path></svg></div>
  </nav-bar>
<!--  横幅广告-->
  <home-swiper :banners="banners"></home-swiper>
  <recommend-view :recomends="recommends"></recommend-view>
  <feature-view/>
  <tab-control class="tab-control" :titles="['好物','精选','时尚']"
               @tabClick="tabClick" ></tab-control>
  <goods-list :goods="goods[currentType].list"></goods-list>

</div>
</template>

<script>
//home下的组件
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";
import TabControl from "../../components/content/tabControl/TabControl";




import {getHomeMultidata,getHomeGoods} from "network/home";
import GoodsList from "../../components/content/goods/GoodsList";




export default {
  name: "home",
  components:{
    // Swiper,
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList

  },
  // 保存数据
  data(){
    return{
      banners:[],
      recommends:[],
      // result:null
      goods:{
        "pop":{page:0,list:[]},
        "new":{page:0,list:[]},
        "sell":{page:0,list:[]},
    },
      currentType:'pop'
    }
  },
  created() {
    //1.请求多个数据
    this.getHomeMultidata()
    this.getHomeGoods("pop")
    this.getHomeGoods("new")
    this.getHomeGoods("sell")
  },
  methods:{
    //事件监听
    tabClick(index){
      switch (index){
        case 0:
          this.currentType ="pop"
          break
        case 1:
          this.currentType ="new"
          break
        case 2:
          this.currentType ="sell"
          break
      }
    },

    //网络请求
    getHomeMultidata () {
      getHomeMultidata().then(res =>{
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page+1;

      getHomeGoods(type,page).then(res =>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    }

  }
}
</script>

<style scoped>
#home{
  padding-top: 44px;
}
.home-nav{
  background-color:#f9f9f9;
  color: black;
  font-size: larger;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.icon{
  padding-top: 10px;
}
.tab-control{
  position: sticky;
  top: 44px;
  z-index: 9;
}
</style>
