

<script>
import { debounce, deepClone } from "@/utils/index";
const fn = debounce(({ val, data, keyColumn }) => {
  const temp = JSON.parse(JSON.stringify(data));
  let originData = val
    ? temp.filter(item => {
        return ((item[keyColumn] || "") + "")
          .toUpperCase()
          .includes(val.toUpperCase());
      })
    : temp;
  return originData;
}, 500);
// const fn = debounce(({ val, data }) => {
//   const temp = JSON.parse(JSON.stringify(_this.data));
//   _this.originData = val
//     ? temp
//         .filter(item => {
//           return ((item[_this.keyColumn] || "") + "")
//             .toUpperCase()
//             .includes(val.toUpperCase());
//         })
//         .slice(
//           _this.pageSizeInternal * (_this.curentPageInternal - 1),
//           _this.pageSizeInternal * _this.curentPageInternal
//         )
//     : temp;
//   _this.totalInternal = _this.originData.length;
// }, 1000);
export default {
  name: "l-table",
  props: {
    data: {
      // 外界传入的data
      type: Array,
      default: () => {
        return [];
      }
    },
    placeholder: {
      // 搜索的提示
      type: String,
      default: "请输入查询的关键字"
    },
    pageSizes: {
      type: Array,
      default: () => {
        return [2, 5, 10, 15, 30, 50, 100];
      }
    },
    pageSize: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      default: 0
    },
    keyColumn: {
      type: [String, Number, Boolean],
      default: ""
    },
    columns: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      currentPage: 1, // 初始显示第几页
      originData: [],
      loading: false,
      pageSizeInternal: this.pageSize,
      totalInternal: this.total,
      pageSizesInternal: this.pageSizes,
      curentPageInternal: 1,
      // 搜索相关
      inputContent: ""
    };
  },
  computed: {},
  watch: {
    data: {
      handler() {
        // 深拷贝一份数据
        this.originData = deepClone(this.data);
        this.totalInternal = this.originData.length;
      },
      deep: true,
      immediate: true
    },
    pageSizeInternal(newv, oldv) {
      this.pageSizeInternal = newv;
      this.curentPageInternal = 1;
      const temp = JSON.parse(JSON.stringify(this.data));
      this.originData = this.inputContent
        ? temp
            .filter(item => {
              return ((item[this.keyColumn] || "") + "")
                .toUpperCase()
                .includes(this.inputContent.toUpperCase());
            })
            .slice(
              this.pageSizeInternal * (this.curentPageInternal - 1),
              this.pageSizeInternal * this.curentPageInternal
            )
        : temp;
    },
    curentPageInternal(newv, oldv) {
      this.curentPageInternal = newv;
      const temp = JSON.parse(JSON.stringify(this.data));
      this.originData = this.inputContent
        ? temp
            .filter(item => {
              return ((item[this.keyColumn] || "") + "")
                .toUpperCase()
                .includes(this.inputContent.toUpperCase());
            })
            .slice(
              this.pageSizeInternal * (this.curentPageInternal - 1),
              this.pageSizeInternal * this.curentPageInternal
            )
        : temp;
    }
  },
  methods: {
    renderSearch(h) {
      const _this = this;
      return (
        <el-row>
          <el-col span={8}>
            <el-input
              value={this.inputContent}
              {...{
                on: {
                  input: val => {
                    _this.inputContent = val;
                    fn({
                      val: val.trim(),
                      data: _this.data,
                      keyColumn: _this.keyColumn
                    }).then(res => {
                      _this.originData = res.slice(
                        _this.pageSizeInternal * (_this.curentPageInternal - 1),
                        _this.pageSizeInternal * _this.curentPageInternal
                      );
                      _this.totalInternal = _this.originData.length;
                    });
                  }
                }
              }}
            ></el-input>
          </el-col>
        </el-row>
      );
    },
    renderPagination(h) {
      const _this = this;
      return h("el-pagination", {
        props: {
          currentPage: this.curentPageInternal,
          pageSize: this.pageSizeInternal,
          pageSizes: this.pageSizesInternal,
          total: this.totalInternal,
          layout: "total, sizes, prev, pager, next, jumper"
        },
        class: "pagination-right",
        on: {
          "size-change"(value) {
            _this.pageSizeInternal = value;
          },
          "current-change"(value) {
            _this.curentPageInternal = value;
          }
        }
      });
    },
    // 渲染column
    renderColumns(h) {
      return this.columns.map((item, index) => {
        return h("el-table-column", {
          props: {
            ...item
          }
        });
      });
      // return h(tr);
    },
    renderTable(h) {
      // console.log(this.data.length);
      const option = {
        props: {
          data: this.originData
        },
        directives: [{ name: "loading", value: this.loading }]
      };
      return h("el-table", option, this.renderColumns(h));
    }
  },
  render(h) {
    return (
      <div>
        {[
          this.renderSearch(h),
          <br />,
          this.renderTable(h),
          <br />,
          this.renderPagination(h)
        ]}
      </div>
    );
  }
};
</script>

<style scoped>
.input-class {
  width: 20%;
}
.teble-constainer {
  text-align: left;
}
.pagination-right {
  text-align: right;
}
.table-header {
  background: silver;
}
</style>