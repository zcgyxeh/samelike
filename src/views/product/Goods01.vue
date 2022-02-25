<template>
  <div class="box">
    <div v-if="$route.path=='/category/Goods01'">
      <van-nav-bar
        title="每日签到"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />

      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1"/>
        <van-dropdown-item v-model="value2" :options="option2"/>
      </van-dropdown-menu>


        <GoodsCard ></GoodsCard>





    </div>

    <transition name="van-slide-right"   v-for="(item, index) in path" :key="index">
      <router-view  :v-if="$route.path == item.path"></router-view>
    </transition>

<!--        <transition name="van-slide-right">-->
<!--&lt;!&ndash;          <router-view  :v-if="$route.path =='/category/Goods01/GoodsProduct01' "></router-view>&ndash;&gt;-->
<!--&lt;!&ndash;          <router-view  :v-if="$route.path =='/category/Goods01/GoodsProduct02' "></router-view>&ndash;&gt;-->
<!--          <router-view  v-if="$route.path =='/category/Goods01/GoodsProduct03'"></router-view>-->



<!--        </transition>-->


  </div>

</template>

<script>
import GoodsCard from "components/common/goodscard/GoodsCard";

export default {
  name: "Goods01",
  methods: {
    onClickLeft() {
      // Toast('返回');
      this.$router.push('/category');
    },
    toPATH() {
      this.$router.push('/category/Goods01/GoodsProduct01')
    }
  },
  data() {
    return {
      value1: 0,
      value2: 'a',
      option1: [
        {text: '全部商品', value: 0},
        {text: '新款商品', value: 1},
        {text: '活动商品', value: 2},
      ],
      option2: [
        {text: '默认排序', value: 'a'},
        {text: '好评排序', value: 'b'},
        {text: '销量排序', value: 'c'},
      ],
      path:[
        {
          path:'/category/Goods01/GoodsProduct01'
        },
        {
          path:'/category/Goods01/GoodsProduct02'
        },
        {
          path:'/category/Goods01/GoodsProduct03'
        },
        {
          path:'/category/Goods01/GoodsProduct04'
        },
        {
          path:'/category/Goods01/GoodsProduct05'
        }

      ]
    };
  },
  components: {
    GoodsCard
  }
}
</script>

<style scoped>
.box {
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #efefef;
  z-index: 10;
}
</style>
