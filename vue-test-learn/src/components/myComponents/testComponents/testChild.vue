<template>
  <div class="wrapper">{{title}}</div>
</template>

<script>
export default {
  name: 'test-child',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  inject: ['user'],
  components: {},
  created() {},
  mounted() {
    console.log('通过$attrs拿到父组件的非props属性：', this.$attrs);
    console.log(
      '通过$listeners拿到父组件中绑定的非原生事件：',
      this.$listeners
    );
    console.log('获取到父组件provide的数据：', this.user);
  },
  data() {
    return {};
  },
  methods: {},
  watch: {
    $attrs: {
      handler(newVal) {
        console.log('通过$attrs拿到父组件的非props属性：', newVal);
      },
      immediate: true,
      deep: true
    }
  }
};
</script>
<style lang="less" scoped>
.wrapper {
}
</style>