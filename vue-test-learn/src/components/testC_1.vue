<template>
  <div class="wrapper">
    <h1 @click="setName">TestC_1下的子路由</h1>
    <div>{{$store.state.name}}</div>
    <div>{{$store.getters.addLastName}}，，，getters的使用</div>
    <div>{{$store.state.name}}，，，actions的使用</div>
    <div>{{$store.state.lxp.name}}，，，modules的使用</div>
    <div>{{$store.getters.getName3}}，，，modules中的getters的使用</div>
    <!-- <hc ele-type="fggggg"></hc> -->
  </div>
</template>

<script>
import Hcomponent from './HComponent';
export default {
  name: 'TestC_1',
  components: {
    hc: Hcomponent
  },
  created() {
    console.log('testC-1:', this.$route.params.name);
    console.log('options:', this.$options);
    console.log('$Store:', this.$store);
    this.$store
      .dispatch('aModifyName')
      .then((re) => {
        console.log('已修改', re);
      })
      .catch((err) => {
        console.log('已修改', err);
      });
  },
  mounted() {},
  data() {
    return {};
  },
  methods: {
    // 修改名字
    setName() {
      this.$store.commit('modifyName', 'mmmmmm');
    }
  },
  watch: {
    $route: function(newV, oldV) {
      console.log('V:', newV.params.name);
    }
  }
};
</script>
<style lang="less" scoped>
.wrapper {
}
</style>