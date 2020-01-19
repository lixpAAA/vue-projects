<template>
  <div class="wrapper">
    <input type="text" v-model="input" placeholder="请输入..." />
    <button @click="submit">提交</button>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component({
  components: {},
  props: {
    message: {
      type: String,
      default: ''
    }
  }
})
export default class ClassName extends Vue {
  input: any = ''
  mounted() {}
  created() {}
  submit() {
    this.$emit('input', this.input)
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.wrapper {
}
</style>