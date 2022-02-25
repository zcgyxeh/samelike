<template>
  <div class="box">
<!--标题-->
    <van-row class="van-row">
      <van-col span="6"></van-col>
      <van-col span="12"><h2>购物车</h2></van-col>
      <van-col span="6"></van-col>
    </van-row>
<!--    商品的选择-->
    <van-checkbox-group v-model="result">

      <van-checkbox name="a" class="van-checkbox">
        <van-swipe-cell >
          <van-card
            num="2"
            price="15.00"
            desc="描述信息"
            title="商品标题"
            class="goods-card"
            :thumb="imgURL"
            @click="toPath()"
          />
          <template #right>
            <van-button square text="删除" type="danger" class="delete-button" />
          </template>
        </van-swipe-cell>
      </van-checkbox>


      <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
        <van-checkbox v-model="checked">全选</van-checkbox>
        <template #tip>
           <span @click="onClickEditAddress">修改地址</span>
        </template>
      </van-submit-bar>


    </van-checkbox-group>
  </div>

</template>

<script>


import NavBar from "../../common/navbar/NavBar";


export default {
  name: "cart",
  components:{
    NavBar
  },
  data() {
    return {
      result: ['a', 'b'],
      imgURL:require('assets/img/product/bread/1/1.jpg')
    };
  },
  methods:{
    checked(){

    },
    onClickEditAddress(){

    },
    onSubmit(){

    },
    toPath(){
      this.$router.push('/category/Goods01/GoodsProduct01')
    }
  }


}
</script>

<style scoped>
.van-row{
  background-color: darkblue;
  color: white;
  height: 45px;
  text-align: center;
  line-height: 45px;
}
.goods-card {
  margin: 0;
  background-color: white;
}

.delete-button {
  height: 100%;
}

.box van-card{
  width: 350px;
}

.van-submit-bar{
  margin-bottom:60px;
}
.van-swipe-cell{
  /*flex: 1;*/
  width: 350px;
}
</style>
