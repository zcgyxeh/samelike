<template>
  <div class="box">

    <van-nav-bar
      title="付款"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <van-card
      num="1"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      :thumb="imgURL1"
    >


      <template #tags>
        <van-count-down :time="time">
          <template #default="timeData">
            <span class="block">{{ timeData.hours }}</span>
            <span class="colon">:</span>
            <span class="block">{{ timeData.minutes }}</span>
            <span class="colon">:</span>
            <span class="block">{{ timeData.seconds }}</span>
          </template>
        </van-count-down>
      </template>
      <template #footer>
        <van-button size="mini">取消</van-button>
        <van-button size="mini" @click="showPopup()">支付</van-button>
      </template>
    </van-card>


    <div>

      <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
        <h2>请输入密码</h2>
        <!-- 密码输入框 -->
        <van-password-input
          :value="value"
          :focused="showKeyboard"
          @focus="showKeyboard = true"
        />
        <!-- 数字键盘 -->
        <van-number-keyboard
          v-model="value"
          :show="showKeyboard"
          @blur="showKeyboard = false"
        />
      </van-popup>

    </div>

  </div>
</template>

<script>
export default {
  name: "MyCollection",
  methods: {
    onClickLeft() {
      // Toast('返回');
      this.$router.push('/profile');
    },
    showPopup() {
      this.show = true;
    },
  },
  data() {
    return {
      time: 30 * 60 * 60 * 1000,
      show: false,
      value: '',
      showKeyboard: true,
      imgURL1:require('assets/img/product/bread/1/1.jpg'),
    }
  },
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

.colon {
  display: inline-block;
  margin: 0 4px;
  color: #ee0a24;
}

.block {
  display: inline-block;
  width: 22px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #ee0a24;
}
</style>
