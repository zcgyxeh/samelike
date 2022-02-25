<template>
<div class="popup">
  <form action="/">
    <van-search
      v-model="value"
      show-action
      :placeholder="defaultKeyword"
      @search="onSearch"
      @cancel="onCancel"
    />
<!--    history组件-->
    <History v-if="blockshow==1" :historyKeywordList="historyKeywordList"
             :hotKeywordList="hotKeywordList"/>

    <MyProduct :filterCategory="filterCategory"  :goodsList="goodsList" v-else/>


  </form>
</div>
</template>

<script>
import History from "components/content/history/History";
import MyProduct from "components/content/myproduct/MyProduct";

//网络请求
import {getPopupDate} from "network/api";


import { Toast } from 'vant';




export default {
  name: "Popup",
  data() {
    return {
      value: '',
      // 存放历史的数据
      historyKeywordList:[],
      defaultKeyword:'',
      hotKeywordList:[],
      //1为历史数据
      //3为产品
      blockshow:1,
      // 搜索的数据
      goodsList:[],
      filterCategory:[]
      };
  },
  methods: {
    // 搜索框请求数据事件
    onSearch() {
      let _this = this;
      getSearch({
        keyword:this.value
      }).then(res=>{

        console.log(res)
        if(res.errno == 0){
          this.blockshow = 3
          let {goodsList,filterCategory} =res.data
          //修改数组中的名字
          let  arr = JSON.parse(JSON.stringify(filterCategory).replace(/name/g, 'text').replace(/id/g, 'value'))


          _this.goodsList = goodsList;
          _this.filterCategory = arr;
        }
      })
    },
    onCancel() {
      this.$router.go(-1)
    },
  },
  components:{
    History,
    MyProduct
  },
  created() {
    getPopupDate().then(res => {
      console.log(res)
      if(res.errno==0){
        let {defaultKeyword,historyKeywordList,hotKeywordList} =res.data
        this.defaultKeyword =defaultKeyword.keyword
        this.historyKeywordList = historyKeywordList
        this.hotKeywordList =hotKeywordList
        // console.log(hotKeywordList[2].is_hot)
        }
    })
  }
  }
</script>

<style scoped>
.popup{
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #efefef;
  z-index: 10;
}
</style>
