<template>
<div>
  <h3>类目热销榜</h3>
  <van-grid :border="false" :column-num="2">
    <van-grid-item>
      <van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
      <span></span>
    </van-grid-item>
    <van-grid-item>
      <van-image src="https://img01.yzcdn.cn/vant/apple-2.jpg" />
    </van-grid-item>
  </van-grid>

  <van-grid :column-num="4" class="windows_goods" >
    <van-grid-item v-for="(item,index) in goods_img" :key="index" border="true">
      <div>{{item.good_test}}</div>

      <img :src="item.imgURL" alt="">

    </van-grid-item>
  </van-grid>
</div>
</template>

<script>
export default {
  name: "sellWell",
  data(){
    return{
      goods_img:[
        {
          imgURL:require('assets/img/sellhot/1.webp'),
          good_test:"新品发布"
        },
        {
          imgURL:require('assets/img/sellhot/2.webp'),
          good_test:"新品发布"
        },
        {
          imgURL:require('assets/img/sellhot/3.webp'),
          good_test:"新品发布"
        },
        {
          imgURL:require('assets/img/sellhot/4.webp'),
          good_test:"新品发布"
        },
        {
          imgURL:require('assets/img/sellhot/5.webp'),
          good_test:"新品发布"
        },
        {
          imgURL:require('assets/img/sellhot/6.webp'),
          good_test:"新品发布"
        }
      ]

    }
  }
}
</script>

<style scoped>
.windows_goods{
  border: hidden;
  font-size: 10px;
}
.windows_goods img{
  width: 50px;
}
</style>
