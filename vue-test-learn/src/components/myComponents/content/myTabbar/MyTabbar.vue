<template>
  <div class="wrapper">
    <slot>
      <my-tabbar-item :tabbar-iitems="tabbarIitems"></my-tabbar-item>
    </slot>
  </div>
</template>

<script>
import MyTabbarItem from './MyTabbarItem';
export default {
  name: 'MyTabbar',
  props: {
    tabbarIitems: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  components: {
    MyTabbarItem
  },
  created() {},
  mounted() {},
  data() {
    return {};
  },
  methods: {}
};
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
</style>