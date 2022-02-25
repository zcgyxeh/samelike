<template>
  <van-grid :column-num="5" :border="false">
    <van-grid-item icon="balance-list-o" text="我的订单" to="/profile/MyOrder" class="AA" badge="1"/>
    <van-grid-item icon="balance-pay" to="/profile/MyCollection" text="付款"/>
    <van-grid-item icon="sign" text="收货"/>
    <van-grid-item icon="records" text="评价"/>
    <van-grid-item icon="tosend" text="售后服务"/>

    <van-grid-item to="/profile/Obligation">
      <van-icon name="like" class="AA"/>
      <span class="span-item">我的收藏</span>
    </van-grid-item>

    <van-grid-item>
      <span>100</span>
      <span class="span-item">商品</span>
    </van-grid-item>

    <van-grid-item>
      <span>100</span>
      <span class="span-item">话题</span>
    </van-grid-item>

    <van-grid-item>
      <span>100</span>
      <span class="span-item">专题</span>
    </van-grid-item>

    <van-grid-item>
      <span>100</span>
      <span class="span-item">评价</span>
    </van-grid-item>

  </van-grid>
</template>

<script>
export default {
  name: "UserBottomTow"
}
</script>

<style scoped>
.span-item {
  margin-top: 10px;
  font-size: 12px;
}

.AA {
  color: sandybrown;
}
</style>
