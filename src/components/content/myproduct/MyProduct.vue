<template>
  <div>
    <van-dropdown-menu>
      <van-dropdown-item title="综合" v-model="value1" :options="option1" />
      <van-dropdown-item  title="价格"v-model="value2" :options="option2" />
      <van-dropdown-item title="分类" v-model="value3" :options="filterCategory" />
    </van-dropdown-menu>
    <van-empty v-if="isSearch " image="search" description="你搜索的内容为空" />

    <Product v-else :goodsList="goodsList" :filterCategory="filterCategory"/>

  </div>
<!--存放搜索框的-->

</template>

<script>
import Product from "../product/Product";

export default {
  name: "MyProduct",
  props:['filterCategory','goodsList'],
  components: {
    Product
  },
  data() {
    return {
      value1: 0,
      value2: 'a',
      value3: 'b',
      isSearch:false,
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 },
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' },
      ],
      option3: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' },
      ],
    };
  },
}
</script>

<style scoped>

</style>
