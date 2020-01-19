<template>
  <div id="app">
    <!-- 
      router-link的tag属性，可以改变渲染之后的元素标签
      replace属性，将不会留下历史记录
      1. 影藏的类样式，router-link-active激活样式
      2. 可以设置active-class=‘’来设置样式
      3. 也可以在全局router配置时，配置linkActiveClass
    -->
    <!-- <router-link :to="{path: '/test/' + param}" tag="button">测试页面</router-link>
    <router-link :to="{path: '/helloword' }" tag="button">首页</router-link>-->
    <keep-alive>
      <router-view />
    </keep-alive>
    <my-tabbar :tabbar-iitems="tabbarItems"></my-tabbar>
  </div>
</template>

<script>
import MyTabbar from "components/myComponents/common/myTabbarPlus/MyTabbar";
import Vue from "vue";
import { resolve } from "q";
export default {
  name: "App",
  components: {
    MyTabbar
  },
  data() {
    return {
      param: "testParam",
      tabbarItems: [
        {
          imgPath: "home.svg",
          imgActivePath: "home1.svg",
          text: "首页",
          path: "/home"
        },
        {
          imgPath: "cart.svg",
          imgActivePath: "cart1.svg",
          text: "购物车",
          path: "/cart"
        },
        {
          imgPath: "shop.svg",
          imgActivePath: "shop1.svg",
          text: "商店",
          path: "/shop"
        },
        {
          imgPath: "user.svg",
          imgActivePath: "user1.svg",
          text: "用户",
          path: "/user"
        }
      ],
      testObj: {
        name: "lxp"
      }
    };
  },
  created() {
    new Promise(resolve => {
      Vue.set(this.$options.data().testObj, "age", 18);
      resolve(true);
    }).then(e => console.log("test:", this.$options.data().testObj.age));

    // console.log('test:', this.$options.data().testObj);
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
