<template>
  <div class="wrapper">
    <h1>this is a test component</h1>
    <button @click="goChild">子路由</button>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
const vm = new Vue();

export default {
  name: 'Test',
  components: {},
  created() {
    console.log('routerParam:', this.$route.params.param);
  },
  mounted() {
    vm.$on('change', (data) => {
      console.log('通过vue.$emit()获取的事件消息：', data);
    });
  },
  data() {
    return {};
  },
  methods: {
    goChild() {
      this.$router.push({ name: 'testc1', params: { name: '1211111' } });
    }
  }
};
</script>
<style scoped>
.wrapper {
}
</style>