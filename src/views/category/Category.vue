<template>
<div>
<!--  头部-->
  <van-nav-bar title="分类" left-text="返回" left-arrow>
    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>


  <van-tree-select height="160vw" :items="items" :main-active-index.sync="active">
    <template #content>

      <van-grid :column-num="2"   v-if="active === 0">
        <van-grid-item v-for="value in 15" :key="value" icon="photo-o" text="文字" />
      </van-grid>

    </template>
  </van-tree-select>

<!--  分类-->





</div>

</template>

<script>
import Vue from 'vue';

import { NavBar ,Icon ,Grid, GridItem ,TreeSelect } from 'vant';

Vue.use(NavBar)
Vue.use(Icon);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(TreeSelect);


export default {
  name: "Category",
  components:{
    NavBar,
    Icon
  },
  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },
  },
  data() {
    return {
      active: 0,
      items: [{ text: '分组 1' }, { text: '分组 2' },{ text: '分组 3' },{ text: '分组 4' },{ text: '分组 5' }],
    };
  }
}
</script>

<style scoped>

</style>
