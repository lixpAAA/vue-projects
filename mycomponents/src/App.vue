<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" sss="aaaaaaaa" /> -->
    <!-- <router-link to="/about">about</router-link> -->
    <router-view></router-view>
    <!-- <a href="#" @click.prevent="goAbout">about</a> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import "element-ui/lib/theme-chalk/index.css";
@Component({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {
  goAbout() {
    this.$router.push("/about");
  }
  created() {
    this.$router.addRoutes([
      {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/About.vue")
      }
    ]);
  }
}
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
