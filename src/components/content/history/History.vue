<template>
  <div class="history">
    <div class="top">
      <h4>历史记录</h4>
      <van-icon name="delete-o"/>

    </div>
    <div class="down">
      <van-tag plain v-for="(item,index) in historyKeywordList " :key="index"
               class="van-tag"
               type="default">
        {{ item }}
      </van-tag>

    </div>

    <div class="top">
      <h4>热门搜索</h4>
    </div>
    <div class="down">
      <van-tag plain class="van-tag" v-for="(item,index) in hotKeywordList"
               :type="item.is_hot == 1? 'danger':'default'"
      >{{ item.keyword }}
      </van-tag>


    </div>
  </div>
</template>

<script>
export default {
  name: "History",
  props: ['historyKeywordList', 'hotKeywordList'],
}
</script>

<style scoped>
.history {
  padding: 0 2%;
  background: #ffffff;

}

.top {
  display: flex;
  justify-content: space-between;
  height: 3rem;
  /*background: sandybrown;*/
  align-items: center;
}

.van-tag {
  font-size: 1rem;
  margin-right: 10px;
  margin-top: 10px;
}

.down {
  padding-bottom: 10px;
}
</style>
