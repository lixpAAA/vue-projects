<template>
  <div>
    <nav-bar class="nav-bar-bg">
      <div class="nav-bar-title" slot="center">购物街</div>
    </nav-bar>
    <!-- <swiper :img-data='imgdata'/> -->
    <el-carousel :interval="4000" height="200px" indicator-position="none">
      <el-carousel-item v-for="item in imgdata" :key="item.link">
        <a :href="item.link">
          <img :src="item.src" alt class="img-style" />
        </a>
      </el-carousel-item>
    </el-carousel>
    <new-production>
      <production-item :data="imgdata"></production-item>
    </new-production>
    <button v-btn-click="getData" @click="test">kkkkkk</button>
    <div v-html="html" v-text="html"></div>
    <div v-bind:classList.prop="html1"></div>
    <div :v-hh.camel="html1"></div>
    <input type="text" v-model.trim="html" />
  </div>
</template>

<script>
import http from "network/home/index";
import navBar from "components/myComponents/content/navbar/navbar";
import Swiper from "components/myComponents/common/swiper/swiper";
const $ = require("jquery");

import NewProduction from "components/myComponents/content/newProduction/NewProduction";
import ProductionItem from "components/myComponents/content/newProduction/ProductionItem";
// import { resolve, reject } from 'q'
export default {
  name: "home",
  components: {
    navBar,
    Swiper,
    NewProduction,
    ProductionItem
  },
  data() {
    return {
      imgdata: [{ link: "", src: "" }],
      bbb: "dsdsdsd",
      html: "",
      html1: ["red"]
    };
  },
  created() {
    // console.log(ElCarousel)
    let _this = this;
    console.log("$:" + $);
    let vv = `function test(){console.log(111);}`;
    this.html = `<h2 style='color: red' onclick='function test(){console.log(111);}test();'>this is h2</h2>}`;
    this.getMoreImg();
    http.test().then(res => {});
    http.testGet().then(res => {
      console.log(res);
    });
  },
  methods: {
    test() {
      console.log(this.bbb);
    },
    getMoreImg() {
      http
        .getMoreImg()
        .then(res => {
          if (res.data.code === 1) {
            this.imgdata = res.data.data.list;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getData() {
      return new Promise((resolve, reject) => {
        http.testGet().then(res => {
          console.log(res);
          resolve(true);
        });
      });
    }
  },
  watch: {
    html: {
      handler: function(newV, old) {
        newV = newV.replace(/\s+/g, "");
        console.log(newV);
      },
      immedite: true
    }
  }
};
</script>
   
<style scoped>
.nav-bar-bg {
  background: var(--them-color);
}
.nav-bar-title {
}
.img-style {
  /* /* height: 200px; */
  width: 100%;
}
</style>