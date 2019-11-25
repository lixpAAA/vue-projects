<template>
  <div style="height:800px">
    <header class="header">渠道列表</header>
    <el-row>
      <el-table :data="[...tableData2]" style="width: 100%" :span-method="objectSpanMethod" border>
        <el-table-column :prop="item.porp" :label="item.label" width="180" align="center" v-for="item in data2" :key="item.key"></el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data2: [
        { label: '平台名称', porp: 'platForm' },
        { label: '版本', porp: 'version' },
        { label: '菜单', porp: 'view' },
        { label: '子菜单', porp: 'sonView' }
        //   { label: '菜单点击次数', porp: 'clickNumber' },
        //   { label: '菜单点击人数', porp: 'clickPopleNumber' },
        //   { label: '人均点击次数', porp: 'clickFlatNumber' }
      ],
      tableData2: [
        {
          platForm: '1',
          version: '2',
          view: '智慧服务',
          sonView: '当天挂号',
          clickNumber: '1',
          clickPopleNumber: '2',
          clickFlatNumber: '3'
        },
        {
          platForm: '',
          version: '',
          view: '',
          sonView: '预约挂号',
          clickNumber: '1',
          clickPopleNumber: '2',
          clickFlatNumber: '3'
        },
        {
          platForm: '',
          version: '',
          view: '',
          sonView: '智能就医助手',
          clickNumber: '4',
          clickPopleNumber: '5',
          clickFlatNumber: '6'
        },
        {
          platForm: '',
          version: '',
          view: '微信首页',
          sonView: '孕妇学校',
          clickNumber: '1',
          clickPopleNumber: '2',
          clickFlatNumber: '3'
        },
        {
          platForm: '',
          version: '',
          view: '',
          sonView: '智慧护理',
          clickNumber: '4',
          clickPopleNumber: '5',
          clickFlatNumber: '6'
        },
        {
          platForm: '',
          version: '',
          view: '',
          sonView: '微信首页',
          clickNumber: '1',
          clickPopleNumber: '2',
          clickFlatNumber: '3'
        },
        {
          platForm: '',
          version: '',
          view: '更多',
          sonView: '个人中心',
          clickNumber: '1',
          clickPopleNumber: '2',
          clickFlatNumber: '3'
        },
        {
          platForm: '',
          version: '',
          view: '更多',
          sonView: '个人中心',
          clickNumber: '1',
          clickPopleNumber: '2',
          clickFlatNumber: '3'
        }
      ]
    }
  },

  components: {},
  computed: {},

  mounted() {},
  methods: {
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      // console.log(row)
      // console.log(column)
      console.log('行', rowIndex, '列', columnIndex)
      // console.log('column', column)
      console.log('row', row)

      // if (rowIndex % 8 === 0) {
      //   if (columnIndex === 0 || columnIndex === 1) {
      //     return {
      //       rowspan: 8,
      //       colspan: 0
      //     }
      //   }
      // }
      if (columnIndex === 0) {
        if (rowIndex % 8 === 0) {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
        //    else {
        //     return {
        //       rowspan: 8,
        //       colspan: 0
        //     }
        //   }
      }
      //  else if (columnIndex === 2) {
      //   if (rowIndex % 3 === 0 && rowIndex < 6) {
      //     return {
      //       rowspan: 3,
      //       colspan: 1
      //     }
      //   } else if (rowIndex % 2 === 0) {
      //     return {
      //       rowspan: 2,
      //       colspan: 1
      //     }
      //   } else {
      //     return {
      //       rowspan: 0,
      //       colspan: 0
      //     }
      //   }
      // }
      // else {
      //   return {
      //     rowspan: 0,
      //     colspan: 0
      //   }
      // }
    }
  }
}
</script>
<style>
.header {
  height: 30px;
  margin-bottom: 20px;
}
</style>
