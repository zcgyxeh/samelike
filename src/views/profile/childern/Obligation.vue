<template>
  <div class="box">
    <van-nav-bar
      title="收藏"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <van-tabs v-model="active">
<!--      商品信息-->
      <van-tab title="商品">
        <van-swipe-cell>
          <van-card
            num="2"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            class="goods-card"
            :thumb="imgURL1"
          />
          <template #right>
            <van-button square text="删除" type="danger" class="delete-button" />
          </template>
        </van-swipe-cell>
      </van-tab>
      <van-tab title="话题">
        <van-swipe-cell>
          <van-card
            num="2"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            class="goods-card"
            :thumb="imgURL1"
          />
          <template #right>
            <van-button square text="删除" type="danger" class="delete-button" />
          </template>
        </van-swipe-cell>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "Obligation",
  methods: {
    onClickLeft() {
      // Toast('返回');
      this.$router.push('/profile');
    }
  },
  data() {
    return {
      active: 2,
      imgURL1:require('assets/img/product/bread/1/1.jpg'),
    };
  },
}
</script>

<style scoped>
.box{
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height:100%;
  background: #efefef;
  z-index: 10;
}

.goods-card {
  margin: 0;
  background-color: @white;
}

.delete-button {
  height: 100%;
}
</style>
