<template>
  <div class="wrapper">
    <div class="tabbar-item" v-for="item in tabbarIitems" :key="item.imgPath" @click="goViews(item.path)">
      <img :src="getSrc(item.imgActivePath)" :alt="gteImgAlt(item.imgActivePath)" v-if="currentPath===item.path" />
      <img :src="getSrc(item.imgPath)" :alt="gteImgAlt(item.imgPath)" v-else />
      <div :class="{defaultTextColor: currentPath===item.path}">{{item.text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'name',
  props: {
    tabbarIitems: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  components: {},
  created() {},
  mounted() {},
  data() {
    return {
      currentPath: this.tabbarIitems[0].path
    };
  },
  methods: {
    gteImgAlt(path) {
      return path.split('.')[0];
    },
    getSrc(path) {
      return require(`@/assets/img/${path}`);
    },
    goViews(path) {
      this.currentPath = path;
      this.$router.push(path);
    }
  },
  computed: {
    // imgAlt(aa) {
    //   console.log('aaa:', aa)
    // }
  }
};
</script>
<style lang="less" scoped>
.tabbar-item {
  flex: 1;
  font-size: 14px;
  color: #1296db;
  letter-spacing: 1px;
  cursor: pointer;
}
img {
  height: 25px;
  width: 25px;
}
.defaultTextColor {
  color: #222222;
}
</style>