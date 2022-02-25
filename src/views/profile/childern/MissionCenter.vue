<template>
  <div class="box">
    <van-nav-bar
      title="优惠券"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <!-- 优惠券单元格 -->
    <van-coupon-cell
      :coupons="coupons"
      :chosen-coupon="chosenCoupon"
      @click="showList = true"
    />
    <!-- 优惠券列表 -->
    <van-popup
      v-model="showList"
      round
      position="bottom"
      style="height: 90%; padding-top: 4px;"
    >
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>

  </div>
</template>

<script>
const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元',
};

export default {
  name: "MissionCenter",
  data() {
    return {
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList:false
    };
  },
  methods: {
    onClickLeft() {
      // Toast('返回');
      this.$router.push('/profile');
    },
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
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
