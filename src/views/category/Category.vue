<template>
  <div>
    <div v-if="$route.path == '/category'">
      <!--  头部-->
      <van-nav-bar title="分类" left-text="返回" left-arrow>
        <template #right>
          <van-icon name="search" size="18"/>
        </template>
      </van-nav-bar>


      <van-tree-select class="select-item" height="160vw" :items="items" :main-active-index.sync="active">
        <template #content>

          <van-grid :column-num="2"   v-if="active === 0">
            <van-grid-item v-for="(item,index) in Imgdata1" :key="index" border="true">
              <img :src="item.imgURL" alt=""  @click="getPath(item.toURL)">
              <div>{{item.good_test}}</div>
            </van-grid-item>
          </van-grid>

          <van-grid :column-num="2"   v-if="active === 1">
            <van-grid-item v-for="(item,index) in Imgdata2" :key="index" border="true">
              <img :src="item.imgURL" alt="">
              <div>{{item.good_test}}</div>
            </van-grid-item>
          </van-grid>

          <van-grid :column-num="2"   v-if="active === 2">
            <van-grid-item v-for="(item,index) in Imgdata3" :key="index" border="true">
              <img :src="item.imgURL" alt="">
              <div>{{item.good_test}}</div>
            </van-grid-item>
          </van-grid>

          <van-grid :column-num="2"   v-if="active === 3">
            <van-grid-item v-for="(item,index) in Imgdata4" :key="index" border="true">
              <img :src="item.imgURL" alt="">
              <div>{{item.good_test}}</div>
            </van-grid-item>
          </van-grid>

          <van-grid :column-num="2"   v-if="active === 4">
            <van-grid-item v-for="(item,index) in Imgdata5" :key="index" border="true">
              <img :src="item.imgURL" alt="">
              <div>{{item.good_test}}</div>
            </van-grid-item>
          </van-grid>


        </template>
      </van-tree-select>

      <!--  分类-->





    </div>


<!--    <transition name="van-slide-right"  v-for="(item, index) in path" :key="index">-->
<!--      <router-view  :v-if="$route.path == item.pathName"></router-view>-->
<!--    </transition>-->

    <transition name="van-slide-right"  v-for="(item, index) in path" :key="index">
      <router-view  :v-if="$route.path == item.pathName"></router-view>
    </transition>

  </div>


</template>

<script>

export default {
  name: "Category",
  components:{

  },
  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },
    getPath(path){
      this.$router.push(path)
    }
  },
  data() {
    return {
      active: 0,
      items: [{ text: '为你推荐' }, { text: '居家生活' },{ text: '宠物生活' },{ text: '服饰背包' },{ text: '个人清洁' }],
      Imgdata:[[
        {
          imgURL:require('assets/img/category/1.webp'),
          good_test:"新品发布"
        }
      ],[
        {
          imgURL:require('assets/img/category/1.webp'),
          good_test:"新品发布"
        },
        {
          imgURL:require('assets/img/category/1.webp'),
          good_test:"新品发布"
        }
      ]

      ],
      Imgdata1:[
        {
          imgURL:require('assets/img/category/1.webp'),
          good_test:"新品发布",
          toURL:'/category/Goods01'
        }
      ],
      Imgdata2:[
        {
          imgURL:require('assets/img/category/2.1.webp'),
          good_test:"新品发布",
          toURL:'/category/goodsone'
        },
        {
          imgURL:require('assets/img/category/2.7.webp'),
          good_test:"新品发布"
        },
        {
          imgURL:require('assets/img/category/2.3.webp'),
          good_test:"新品发布"
        },
        {
          imgURL:require('assets/img/category/2.4.webp'),
          good_test:"新品发布"
        },
        {
          imgURL:require('assets/img/category/2.5.webp'),
          good_test:"新品发布"
        },
        {
          imgURL:require('assets/img/category/2.6.webp'),
          good_test:"新品发布"
        }
      ],
      Imgdata3:[
        {
          imgURL:require('assets/img/category/3/3.2.webp'),
          good_test:"新品发布"
        },
        {
          imgURL:require('assets/img/category/3/3.3.webp'),
          good_test:"新品发布"
        },
        {
          imgURL:require('assets/img/category/3/3.5.webp'),
          good_test:"新品发布"
        },
        {
          imgURL:require('assets/img/category/3/3.6.webp'),
          good_test:"新品发布"
        },
        {
          imgURL:require('assets/img/category/3/3.7.webp'),
          good_test:"新品发布"
        },
        {
          imgURL:require('assets/img/category/3/3.8.webp'),
          good_test:"新品发布"
        },
        {
          imgURL:require('assets/img/category/3/3.9.webp'),
          good_test:"新品发布"
        },
        {
          imgURL:require('assets/img/category/3/3.10.webp'),
          good_test:"新品发布"
        },
        {
          imgURL:require('assets/img/category/3/3.11.webp'),
          good_test:"新品发布"
        },
        {
          imgURL:require('assets/img/category/3/3.12.webp'),
          good_test:"新品发布"
        }
      ],
      Imgdata4:[
        {
          imgURL:require('assets/img/category/4/4.17.png'),
          good_test:"新品发布"
        },
        {
          imgURL:require('assets/img/category/4/4.2.png'),
          good_test:"新品发布"
        },
        {
          imgURL:require('assets/img/category/4/4.3.png'),
          good_test:"新品发布"
        },
        {
          imgURL:require('assets/img/category/4/4.4.png'),
          good_test:"新品发布"
        },
        {
          imgURL:require('assets/img/category/4/4.5.png'),
          good_test:"新品发布"
        },
        {
          imgURL:require('assets/img/category/4/4.6.png'),
          good_test:"新品发布"
        },
        {
          imgURL:require('assets/img/category/4/4.7.png'),
          good_test:"新品发布"
        },
        {
          imgURL:require('assets/img/category/4/4.8.png'),
          good_test:"新品发布"
        },
        {
          imgURL:require('assets/img/category/4/4.9.png'),
          good_test:"新品发布"
        },
        {
          imgURL:require('assets/img/category/4/4.10.png'),
          good_test:"新品发布"
        },
        {
          imgURL:require('assets/img/category/4/4.11.png'),
          good_test:"新品发布"
        },
        {
          imgURL:require('assets/img/category/4/4.12.png'),
          good_test:"新品发布"
        },
        {
          imgURL:require('assets/img/category/4/4.13.png'),
          good_test:"新品发布"
        },
        {
          imgURL:require('assets/img/category/4/4.14.jpg'),
          good_test:"新品发布"
        },
        {
          imgURL:require('assets/img/category/4/4.16.png'),
          good_test:"新品发布"
        }
      ],
      Imgdata5:[
        {
          imgURL:require('assets/img/category/5/1.png'),
          good_test:"新品发布"
        },
        {
          imgURL:require('assets/img/category/5/2.png'),
          good_test:"新品发布"
        },
        {
          imgURL:require('assets/img/category/5/3.png'),
          good_test:"新品发布"
        },
        {
          imgURL:require('assets/img/category/5/4.png'),
          good_test:"新品发布"
        },
        {
          imgURL:require('assets/img/category/5/6.png'),
          good_test:"新品发布"
        },
        {
          imgURL:require('assets/img/category/5/7.png'),
          good_test:"新品发布"
        },
        {
          imgURL:require('assets/img/category/5/8.png'),
          good_test:"新品发布"
        },
        {
          imgURL:require('assets/img/category/5/8.png'),
          good_test:"新品发布"
        },
        {
          imgURL:require('assets/img/category/5/9.png'),
          good_test:"新品发布"
        }
      ],
      path:[
        {
          pathName:'/category/goodsone'
        },
        {
          pathName:'/category/goods'
        },
        {
          pathName:'/profile/Obligation'
        },
        ]
    };
  }
}
</script>

<style scoped>
.select-item img{
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
}
</style>
