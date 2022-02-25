<template>
<div class="box">
  <form action="/">
    <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
    />
  </form>
</div>
</template>

<script>
import { Toast } from 'vant';
export default {
  name: "SearchGroup",
  data() {
    return {
      value: '',
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      this.$router.push("/tuan")
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
