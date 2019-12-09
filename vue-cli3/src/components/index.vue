<template>
  <div id="echarts" style="height:400px">
    <table></table>
    <div>slljajfhh</div>
    <!-- <el-row>
            <el-col :span="6">
               <span>1233</span>     
            </el-col>
            <el-select> v-model="plaformName" class="input">
               <el-option v-for="item in statusList" :key="item.value" :label="item.label" :value="item.value"></el-option>     
            </el-select>
    </el-row>-->
    <div id="tendency" style="height:400px"></div>
    <!-- <table ref="scTable" :queryFunction="$api.getSupervisionObj" class="table" :tableParams="$commonConfig.tableParams" :paginationParams="$commonfig.paginationParams">
            <el-table-column label="平台名称" prop="plantforName"></el-table-column>
            <el-table-column label="渠道ID" prop="channelId"></el-table-column>
    </table>-->
  </div>
</template>
<script >
import echarts from 'echarts'
export default {
  name: 'tendency',

  data() {
    return {
      charts: '',
      /*	opinion: ["1", "3", "3", "4", "5"],*/
      opinionData: ['3', '2', '4', '4', '5']
    }
  },
  methods: {
    drawLine(id) {
      this.charts = echarts.init(document.getElementById(id))
      this.charts.setOption({
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['近七日收益']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },

        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1', '2', '3', '4', '5']
        },
        yAxis: {
          type: 'value'
        },

        series: [
          {
            name: '近七日收益',
            type: 'line',
            stack: '总量',
            data: this.opinionData
          }
        ]
      })
    },
    query() {
      console.log('1')
    }
  },
  components: {},
  //调用
  mounted() {
    this.$nextTick(function() {
      this.drawLine('echarts')
    })
  }
}
</script>
<style>
</style>