<template>
  <div>
    <slot>
      <my-tabbar-item>
        <slot>
          <div class="wrapper">
            <div class="tabbar-item" v-for="item in tabbarIitems" :key="item.imgPath" @click="goViews(item.path)">
              <img :src="getSrc(item.imgActivePath)" :alt="gteImgAlt(item.imgActivePath)" v-if="currentPath===item.path" />
              <img :src="getSrc(item.imgPath)" :alt="gteImgAlt(item.imgPath)" v-else />
              <div :class="{defaultTextColor: currentPath===item.path}">{{item.text}}</div>
            </div>
          </div>
        </slot>
      </my-tabbar-item>
    </slot>
  </div>
</template>

<script>
const minx = {
  created() {
    console.log('mixin......')
  }
}

import MyTabbarItem from './MyTabbarItem'
export default {
  name: 'MyTabbar',
  mixins: [minx],
  inject: ['name'],
  props: {
    tabbarIitems: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  components: {
    MyTabbarItem
  },
  created() {
    console.log('item:', this.tabbarIitems)
    console.log('name:', this.name)
  },
  mounted() {},
  data() {
    return {
      currentPath: this.tabbarIitems[0].path
    }
  },
  methods: {
    gteImgAlt(path) {
      return path.split('.')[0]
    },
    getSrc(path) {
      return require(`@/assets/img/${path}`)
    },
    goViews(path) {
      if (this.currentPath !== path) {
        this.currentPath = path
        this.$router.push(path)
      }
    }
  }
}
</script>
<style lang="less" scoped>
.wrapper {
  display: flex;
  position: fixed;
  height: 49px;
  background-color: rgba(236, 234, 234, 0.986);
  box-sizing: border-box;
  padding-top: 1px;
  box-shadow: 0 -3px 3px rgba(238, 231, 231, 0.822);
  left: 0;
  right: 0;
  bottom: 0;
}
img {
  height: 25px;
  width: 25px;
}
.defaultTextColor {
  color: #222222;
}
.tabbar-item {
  flex: 1;
  font-size: 14px;
  color: #1296db;
  letter-spacing: 1px;
  cursor: pointer;
}
</style>