<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <test-child title="标题11" :name="msg" @click.native="test"></test-child>
    <router-link to="test/13">test</router-link>
    <div v-for1="list"></div>
    <test />
  </div>
</template>

<script>
import Vue from "vue";
const vm = new Vue();

import testChild from "./myComponents/testComponents/testChild";
import test from "./qwe";

import { getRouteList as routerUtil } from "../utils/comon";
export default {
  name: "HelloWorld",
  components: {
    testChild,
    test
  },
  props: {
    msg1: "Welcome to Your Vue.js App 11"
  },
  provide: {
    user: { name: "lxp" }
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      list: [1, 12, 1]
    };
  },
  created() {
    vm.$emit("change", 123); /// 全局发出事件消息
    routerUtil();
    console.log("父组件里的test方法");
    // console.log('this:', this.test());
    // this.$http.http('/get').then((res) => {
    //   console.log('默认方式res:', res);
    // });
    // this.$http.http({ url: '/post', method: 'post' }).then((res) => {
    //   console.log('默认方式post:', res);
    // });
  },
  methods: {
    test() {
      console.log("父组件里的test方法");
      this.msg = "改变msg，说明$attr获取的数据是响应式的";
      // this.user.name = '改变后lxp';
    }
  },
  directives: {
    for1: {
      bind: function(el, binding, vnode) {
        let datas = binding.value;
        let str = "";
        // var s = JSON.stringify;
        if (toString.call(datas) === "[object Array]") {
          datas.map((item, index) => {
            str += `<div key='${index}'>${item}</div>`;
          });
        }
        el.innerHTML = str;
      },
      inserted: function(el) {}
    }
  },
  beforeRouteEnter: function(to, form, next) {
    console.log("to:", to);
    console.log("form:", form);
    next();
  },
  beforeRouteUpdate: function(to, form, next) {
    console.log("to:", to);
    console.log("form:", form);
    next();
  },
  beforeRouteLeave: function(to, form, next) {
    console.log("to:", to);
    console.log("form:", form);
    next();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
