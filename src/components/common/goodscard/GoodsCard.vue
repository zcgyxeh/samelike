<template>
  <!--  Q:组件封装为什么看不见-->
  <div>
    <div class="goodscard" @click="getcard1('/category/Goods01/GoodsProduct01')">
      <div class="left">
        <img :src="imgURL1" alt="">
      </div>
      <div class="right">
        <h6>黑全麦欧包面包无糖精带馅无减0低肥卡油脂肪代餐饱腹早餐零食品</h6>
        <div class="center">￥20.0</div>
        <div class="bottom">推荐指数
          <van-rate
            v-model="value"
            :size="20"
            color="#ffd21e"
            void-icon="star"
            void-color="#eee"
          />
        </div>
      </div>
    </div>
    <div class="goodscard" @click="getcard1('/category/Goods01/GoodsProduct02')">
      <div class="left">
        <img :src="imgURL2" alt="">
      </div>
      <div class="right">
        <h6>黑全麦欧包面包无糖精带馅无减0低肥卡油脂肪代餐饱腹早餐零食品</h6>
        <div class="center">￥20.0</div>
        <div class="bottom">推荐指数
          <van-rate
            v-model="value"
            :size="20"
            color="#ffd21e"
            void-icon="star"
            void-color="#eee"
          />
        </div>
      </div>
    </div>
    <div class="goodscard" @click="getcard1('/category/Goods01/GoodsProduct03')">
      <div class="left">
        <img :src="imgURL3" alt="">
      </div>
      <div class="right">
        <h6>黑全麦欧包面包无糖精带馅无减0低肥卡油脂肪代餐饱腹早餐零食品</h6>
        <div class="center">￥20.0</div>
        <div class="bottom">推荐指数
          <van-rate
            v-model="value"
            :size="20"
            color="#ffd21e"
            void-icon="star"
            void-color="#eee"
          />
        </div>
      </div>
    </div>
    <div class="goodscard" @click="getcard1('/category/Goods01/GoodsProduct04')">
      <div class="left">
        <img :src="imgURL4" alt="">
      </div>
      <div class="right">
        <h6>黑全麦欧包面包无糖精带馅无减0低肥卡油脂肪代餐饱腹早餐零食品</h6>
        <div class="center">￥20.0</div>
        <div class="bottom">推荐指数
          <van-rate
            v-model="value"
            :size="20"
            color="#ffd21e"
            void-icon="star"
            void-color="#eee"
          />
        </div>
      </div>
    </div>
    <div class="goodscard" @click="getcard1('/category/Goods01/GoodsProduct05')">
      <div class="left">
        <img :src="imgURL5" alt="">
      </div>
      <div class="right">
        <h6>黑全麦欧包面包无糖精带馅无减0低肥卡油脂肪代餐饱腹早餐零食品</h6>
        <div class="center">￥20.0</div>
        <div class="bottom">推荐指数
          <van-rate
            v-model="value"
            :size="20"
            color="#ffd21e"
            void-icon="star"
            void-color="#eee"
          />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "GoodsCard",
  data() {
    return {
      value: 4.5,
      imgURL1: require('assets/img/product/bread/1/1.jpg'),
      imgURL2: require('assets/img/product/bread/2/1.jpg'),
      imgURL3: require('assets/img/product/bread/3/1.jpg'),
      imgURL4: require('assets/img/product/bread/4/1.jpg'),
      imgURL5: require('assets/img/product/bread/5/1.jpg'),
    };
  },
  methods: {
    getcard1(Path) {
      this.$router.push(Path)
    }
  }
}
</script>

<style scoped>
.goodscard {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 170px;
  background-color: white;
  padding: 10px 3px;


}

.left {
  width: 150px;
  height: 95%;
  background: white;
  /*align-items:*/
  margin-left: 1%;
}

.left img {
  width: 100%;
  height: 100%;
}

.right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  height: 95%;
  background: white;
  flex-grow: 1;
}

.right h6 {
  font-size: 15px;
}

.center {
  color: red;
}

/*.bottom{*/
/*  margin-top: 40px;*/
/*}*/
</style>
