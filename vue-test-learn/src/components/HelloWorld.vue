<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <test-child title="标题11" :name="msg" @click.native="test"></test-child>
    <router-link to="test/13">test</router-link>
    <div v-for1="list"></div>
    <input type="file" placeholder="请选择文件..." @change="getFile" />
    <button @click="submit">提交</button>
    <button @click="download">下载</button>
    <a href="C:/Users/lxp/Desktop/test/worker.js">dsds</a>
    <test />
  </div>
</template>

<script>
import Vue from 'vue'
const vm = new Vue()

import testChild from './myComponents/testComponents/testChild'
import test from './qwe'

import http from '../network/home/index'
import { getRouteList as routerUtil } from '../utils/comon'

import fs from 'fs'
export default {
  name: 'HelloWorld',
  components: {
    testChild,
    test
  },
  props: {
    msg1: 'Welcome to Your Vue.js App 11'
  },
  provide: {
    user: { name: 'lxp' }
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      list: [1, 12, 1],
      filePath: ''
    }
  },
  created() {
    vm.$emit('change', 123) /// 全局发出事件消息
    routerUtil()
    // console.log('this:', this.test());
    // this.$http.http('/get').then((res) => {
    //   console.log('默认方式res:', res);
    // });
    // this.$http.http({ url: '/post', method: 'post' }).then((res) => {
    //   console.log('默认方式post:', res);
    // });
  },
  methods: {
    getFile(val) {
      console.log('val:', val.target.files[0])
    },
    test() {
      console.log('父组件里的test方法')
      this.msg = '改变msg，说明$attr获取的数据是响应式的'
      // this.user.name = '改变后lxp';
    },
    submit() {
      const formData = new window.FormData()
      console.log('file:', document.querySelector('input[type=file]').files[0])
      formData.append(
        'file',
        document.querySelector('input[type=file]').files[0]
      )
      http.testUploadFile(formData).then((res) => {
        this.filePath = res.data && res.data.path
        console.log(this.filePath)
      })
    },
    download() {
      const a = document.createElement('a')
      a.href = 'http://localhost:8080/test/download?path=' + this.filePath
      a.click()

      // http.testDownloadFile(this.filePath).then((res) => {
      //   console.log('res:', res)
      //   const a = document.createElement('a')
      //   // a.href = res.data.data
      //   // a.click()
      //   // fs.writeFile('./ddddddd.text', res.data, function(rr) {
      //   //   console.error(rr)
      //   // })
      // })
    }
  },
  directives: {
    for1: {
      bind: function(el, binding, vnode) {
        let datas = binding.value
        let str = ''
        // var s = JSON.stringify;
        if (toString.call(datas) === '[object Array]') {
          datas.map((item, index) => {
            str += `<div key='${index}'>${item}</div>`
          })
        }
        el.innerHTML = str
      },
      inserted: function(el) {}
    }
  }
}
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
