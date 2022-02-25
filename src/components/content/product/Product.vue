<template>
<div class="Product">
  <ul>
    <li v-for="item in goodsList" :key="item.id">
      <img :src="item.list_pic_url" alt="">
      <div class="title van-ellipsis" >{{ item.name }}</div>
      <div class="price">{{ item.retail_price | filterMoney}}</div>
    </li>

  </ul>
</div>
</template>

<script>
export default {
  props:["goodsList"],
  name: "Product",
  data(){
    return{
      imgUrl:require('assets/img/common/top.png')
    }
  }
}
</script>

<style scoped>
.Product ul{
  padding: 10px 2%;
  display: flex;
  justify-content: space-between;
  background: #efefef;
  flex-wrap: wrap;
  font-size: 12px;
}

.Product li{
  width: 49%;
  height: 200px;
  background-color: white;
  margin: 10px 0;
}
.Product img{
  width: 100%;
  height:150px;
  display: block;

}

.title{
  text-align: center;
  margin: 10px 0;
}
.price{
  text-align: center;
  color: darkred;
}
</style>
