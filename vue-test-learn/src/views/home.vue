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
    <input type="text" v-model.trim="html" ref="ffff" />
    <h3>{{testsss}}</h3>
    <span>{{time | formatTime}}</span>
  </div>
</template>

<script>
import http from "network/home/index";
import navBar from "components/myComponents/content/navbar/navbar";
import Swiper from "components/myComponents/common/swiper/swiper";
const $ = require("jquery");

<<<<<<< HEAD
import NewProduction from "components/myComponents/content/newProduction/NewProduction";
import ProductionItem from "components/myComponents/content/newProduction/ProductionItem";
// import { resolve, reject } from 'q'
export default {
  name: "home",
=======
import NewProduction from 'components/myComponents/content/newProduction/NewProduction'
import ProductionItem from 'components/myComponents/content/newProduction/ProductionItem'
import { resolve, reject } from 'q'
// import { resolve, reject } from 'q'
export default {
  name: 'home',
  inject: ['name'],
>>>>>>> 5a69a612be2944f9b8edf9a9bfd575dd01d0823d
  components: {
    navBar,
    Swiper,
    'new-production': (resolve, reject) => {
      setTimeout(() => resolve(NewProduction), 2000)
    },
    ProductionItem
  },
  data() {
    return {
<<<<<<< HEAD
      imgdata: [{ link: "", src: "" }],
      bbb: "dsdsdsd",
      html: "",
      html1: ["red"]
    };
  },
  mounted() {
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
=======
      imgdata: [{ link: '', src: '' }],
      bbb: [1, 23, 4, 5, 6],
      html: '',
      html1: ['red'],
      time: new Date()
    }
>>>>>>> 5a69a612be2944f9b8edf9a9bfd575dd01d0823d
  },
  mounted() {
    // console.log(ElCarousel)
<<<<<<< HEAD
    console.log("$:" + $);
=======
    // let _this = this
    // console.log('$:' + $)
    // let vv = `function test(){console.log(111);}`
    // this.html = `<h2 style='color: red' onclick='function test(){console.log(111);}test();'>this is h2</h2>}`
    // this.getMoreImg()
    // http.test().then((res) => {})
    // http.testGet().then((res) => {
    //   console.log(res)
    // })
    this.testGetProperty()
    console.log('this.$refs', this.$refs['ffff'])
    console.log('inject name:', this.name)
    this.name = 'lixpaaa'
  },
  beforeUpdate() {
    // console.log('this.$refs', this.$refs['ffff'])
  },
  created() {
    // console.log('this.$refs', this.$refs['$app'])
    console.log('$:' + $)
>>>>>>> 5a69a612be2944f9b8edf9a9bfd575dd01d0823d
    // this.getMoreImg()
    // http.test().then((res) => {})
    // http.testGet().then((res) => {
    //   console.log(res)
    // })
<<<<<<< HEAD
    this.test();
=======
    this.test()
    setTimeout(() => {
      this.bbb = [10, 10, 10]
    }, 3000)
>>>>>>> 5a69a612be2944f9b8edf9a9bfd575dd01d0823d
  },
  methods: {
    async test() {
      console.log(this.bbb);
      console.log(Date.now());
      const a = await this.getMoreImg();
      console.log(Date.now());
      const b = await this.getData();
      console.log(Date.now());
      console.log(a, b);
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
<<<<<<< HEAD
        http.testGet().then(res => {
          console.log(res);
          resolve(true);
        });
      });
=======
        http
          .testGet()
          .then((res) => {
            console.log(res)
            resolve(true)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    testGetProperty() {
      console.log('this.$root', this.$root)
      console.log('this.$parent', this.$parent)
      console.log('this.$refs', this.$refs)
    }
  },
  computed: {
    testsss() {
      return JSON.stringify(this.bbb)
>>>>>>> 5a69a612be2944f9b8edf9a9bfd575dd01d0823d
    }
  },
  watch: {
    testsss: {
      handler: function(newV, old) {
        console.log('newV:', newV)
      }
    },
    html: {
      handler: function(newV, old) {
        newV = newV.replace(/\s+/g, '')
        console.log(newV)
      },
      immedite: true
    }
  },
  filters: {
    formatTime(params) {
      let date = new Date(params)
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      let day = date.getDate()

      return year + '-' + month + '-' + day
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