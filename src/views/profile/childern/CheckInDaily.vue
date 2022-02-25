<template>
  <div class="box">
    <van-nav-bar
      title="每日签到"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />


    <van-calendar
      title="日历"
      :poppable="false"
      :show-confirm="false"
      :style="{ height: '500px' }"
    />

    <van-button type="primary" @click="getInfo" color="darkblue" block>签到</van-button>


  </div>
</template>

<script>

export default {
  name: "CheckInDaily",
  methods: {
    onClickLeft() {
      // Toast('返回');
      this.$router.push('/profile');
    },
    getInfo(){
      this.$toast('签到成功');
    }
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
</style>
