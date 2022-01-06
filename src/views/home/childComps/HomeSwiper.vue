<template>
  <swiper>
<!--    动态请求-->
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image">
      </a>
    </swiper-item>

<!--    <swiper-item>-->
<!--      <a href="">-->
<!--        <img src="./src/assets/img/home/1.png" alt="">-->
<!--        <img src="./src/assets/img/home/2.png" alt="">-->
<!--        <img src="./src/assets/img/home/3.png" alt="">-->
<!--      </a>-->
<!--    </swiper-item>-->
    </swiper>
</template>

<script>
import { Swiper, SwiperItem} from "components/common/swiper"
export default {
  name: "HomeSwiper",
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>

</style>
