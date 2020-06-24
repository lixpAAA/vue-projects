<template>
  <div class="hello">
    <h5>{{ msg }}</h5>
    <!-- <component :is="LTable"></component> -->
    <!-- <srollView>
      <h2 slot="header" slot-scope="data">滑动组件{{data.data}}</h2>
    </srollView>
    <srollView />
    <RegularPolygon :lineNumber="4" :radius="10" :width="20" :height="20" />
    <Snow :width="32" :height="40" :grade="3" />
    <Dot :width="32" :height="40" :radius="10" />
    <Wave :height="40" :len="10" />
    </srollView>-->
    <h3>{{time|formatTime('mamm')}}</h3>
    <terminal></terminal>
    <l-table :data="tableData" :columns="columns" key-column="date"></l-table>
    <!-- <inputV @input="getInputInfo" :messge.sync="msg" /> -->
    <!-- <el-dialog title="提示" :visible.sync="visible" width="80%">
      <span>这是一段信息</span>
      <el-sliderp v-model="value1" show-input :max="64" :min="-50" :bar-disabled="false"></el-sliderp>
    </el-dialog>-->
    <button @click="clickTest('1', '2', '3')">fsfsdfsdf</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import srollView from "@/components/common/scrollview/scrollView.vue";
import RegularPolygon from "@/components/common/regularPolygon/regularPolygon.vue";
import Snow from "@/components/common/snow/snow.vue";
import Dot from "@/components/common/dot/dot.vue";
import Wave from "@/components/common/wave/wave.vue";
import LTable from "@/components/common/table/index.vue";
import elSliderp from "@/components/common/slider3";
import terminal from "@/components/content/terminal";

// import inputV from "@/components/content/test.vue";
@Component({
  components: {
    srollView,
    RegularPolygon,
    Snow,
    Dot,
    Wave,
    LTable,
    terminal,
    elSliderp
  },
  filters: {
    formatTime(params: Date, type: string) {
      console.log("type:", type);
      let date = new Date(params);
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();

      return year + "-" + month + "-" + day;
    }
  },
  props: {
    sss: {
      type: String,
      default: "sssss"
    }
  }
})
export default class HelloWorld extends Vue {
  autoSize = { minRows: 8, maxRows: 10 };
  input = "{'ds': 'dasda', 'da': ['dasda']}";
  visible = true;
  value1: number = 0;
  msg: string = ""; // 定义组件的props:原本为props：{ msg: {type: String, defalt:''}}
  srollView: string = "LTable";
  time: Date = new Date();

  tableData: Array<object> = [
    {
      date: 1,
      name: "lsxp"
    },
    {
      date: 2,
      name: "lxp"
    },
    {
      date: 3,
      name: "lxp"
    },
    {
      date: 4,
      name: "lxp"
    },
    {
      date: 5,
      name: "lxp"
    },
    {
      date: 6,
      name: "lxpAA"
    }
  ];
  columns: Array<object> = [
    {
      prop: "date",
      label: "日期"
    },
    {
      prop: "name",
      label: "姓名"
    }
  ];
  mounted() {
    try {
      setTimeout(() => {
        this.msg = "45457777878";
      });
    } catch (e) {}
    console.log("user", this.$store.state.user);
  } //  其他生命周期函数该咋写咋写
  created() {
    Object.freeze(this.msg);
  }
  getInputInfo(e: any) {
    this.msg = e;
  }
  clickTest(a: string, b: string, c: string) {
    console.log("c", c);
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
