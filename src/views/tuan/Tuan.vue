<template>
  <div>
    <div v-if="$route.path == '/tuan'">
      <van-row class="header" type="flex" justify="space-around">
        <van-col span="8"></van-col>
        <van-col span="10"></van-col>
        <van-col span="3" class="van-row-icon">
          <van-icon name="search" @click="toPath('/Tuan/SearchGroup')" size="25px" class="van-row-top-van-icon"/>
        </van-col>
        <van-col span="3">
          <van-icon name="contact" size="25px" class="van-row-top-van-icon"/>
        </van-col>
      </van-row>

      <van-divider content-position="left">工具</van-divider>
      <div class="tools">
        <van-grid :column-num="3">
          <van-grid-item icon="comment-o" text="好友列表"/>
          <van-grid-item icon="volume-o" text="团提醒" to="/Tuan/FriendNews"/>
          <van-grid-item icon="thumb-circle-o" text="系统通知"/>
        </van-grid>

      </div>

      <van-divider content-position="left">消息</van-divider>

      <FriendCard></FriendCard>


    </div>
    <transition name="van-slide-right" v-for="(item, index) in path" :key="index">
      <router-view :v-if="$route.path == item.pathName"></router-view>
    </transition>
  </div>

</template>

<script>
import FriendCard from "./component/FriendCard";

export default {
  name: "Tuan",
  methods: {
    toPath(path) {
      this.$router.push(path);
    },
  },
  components: {
    FriendCard
  },
  data() {
    return {
      path: [{
        pathName: '/Tuan/FriendNews'
      },
        {
          pathName: '/Tuan/SearchGroup'
        },
        {
          pathName: '/Tuan/GroupInformation'
        },
      ]
    }
  }

}
</script>

<style scoped>
.goods-card {
  margin: 0;
  background-color: white;
}

.delete-button {
  height: 100%;
}

.header {
  background-color: darkblue;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  text-align: center;
  color: white;
  margin-bottom: 10px;
}

.tools {
  margin-bottom: 10px;
  border: none;
}

.van-row-icon > van-icon {
  /*margin-left: 10px;*/

}
</style>
