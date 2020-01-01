<template>
  <div class="hello">
    <h5>{{ msg }}</h5>
    <srollView />
    <RegularPolygon :lineNumber="4" :radius="10" :width="20" :height="20" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import srollView from "@/components/common/scrollview/scrollView.vue";
import RegularPolygon from "@/components/common/regularPolygon/regularPolygon.vue";
@Component({
  components: {
    srollView,
    RegularPolygon
  }
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string; // 定义组件的props:原本为props：{ msg: {type: String, defalt:''}}
  mounted() {
    console.log("user", this.$store.state.user);
  } //  其他生命周期函数该咋写咋写
  created() {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
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
