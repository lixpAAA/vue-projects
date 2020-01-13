<template>
  <div class="hello">
    <h5>{{ msg }}</h5>
    <component :is="srollView"></component>
    <!-- <srollView>
      <h2 slot="header" slot-scope="data">滑动组件{{data.data}}</h2>
    </srollView>-->
    <h3>{{time|formatTime('mamm')}}</h3>
    <inputV @input="getInputInfo" :messge.sync="msg" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import srollView from '@/components/common/scrollview/scrollView.vue'
import RegularPolygon from '@/components/common/regularPolygon/regularPolygon.vue'
import inputV from '@/components/content/test.vue'
@Component({
  components: {
    srollView,
    RegularPolygon,
    inputV
  },
  filters: {
    formatTime(params: Date, type: string) {
      console.log('type:', type)
      let date = new Date(params)
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      let day = date.getDate()

      return year + '-' + month + '-' + day
    }
  },
  props: {
    sss: {
      type: String,
      default: 'sssss'
    }
  }
})
export default class HelloWorld extends Vue {
  msg: string = '' // 定义组件的props:原本为props：{ msg: {type: String, defalt:''}}
  srollView: string = 'srollView'
  time: Date = new Date()
  mounted() {
    console.log('user', this.$store.state.user)
  } //  其他生命周期函数该咋写咋写
  created() {}
  getInputInfo(e: any) {
    this.msg = e
  }
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
