<template>
  <div class="wrapper">
    <slot name="header" :data="testdata"></slot>
    <ul id="liContainer">
      <li
        v-for="(item, index) in list"
        :key="generateDomID(item,index, list.length, true)"
        :id="generateDomID(item,index, list.length, false)"
      >{{item.value}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  components: {}
})
export default class SrollView extends Vue {
  testdata: string = "lixp";
  observer: any = null;
  list: Array<any> = []; // 数据源
  firstItemDom: any; // 第一个dom节点
  lastItemDom: any; // 最后一个dom节点
  firstItemDomId: any;
  lastItemDomId: any;
  dataDomCache: any; // 缓存dom
  indexFlas: number = 0;
  mounted() {
    this.firstItemDom = document.getElementById("firstId");
    this.lastItemDom = document.getElementById("lastId");
    console.log("第", this.firstItemDom);
    let option = {
      root: document.getElementById("liContainer")
    };
    this.observer = new IntersectionObserver(this.callback, option);
    this.observer.observe(this.firstItemDom);
    this.observer.observe(this.lastItemDom);
  }
  created() {
    this.list = this.createListData(20, this.indexFlas);
    this.indexFlas += this.list.length; // 标记上次最后数据的下标
  }

  /*       方法区     */
  // IntersectionObserver回调方法
  callback(entries: any) {
    console.log("entries:", entries);
    entries.forEach((entry: any) => {
      if (entry.target.id === "firstId") {
        if (entry.isIntersecting) {
          console.log("第一个元素进入视区");
        }
      } else if (entry.target.id === "lastId") {
        // console.log("最后一个元素进入视区", this.indexFlas);
        if (entry.isIntersecting) {
          console.log("最后一个元素进入视区", this.indexFlas);

          // this.list.splice(0, 10);
          this.list.push(...this.createListData(10, this.indexFlas));
          console.log(this.list);
          this.indexFlas += this.list.length; // 标记上次最后数据的下标
        }
      }
    });
  }
  // 创建模拟数据
  createListData(
    length: number,
    indexFlas: number,
    isIncrement: boolean = true
  ) {
    let list = [];
    for (let i = indexFlas; i < indexFlas + length; ++i) {
      list.push({ id: i, value: i + 1 });
    }
    return list;
  }

  generateDomID(item: any, index: number, length: number, isKey: boolean) {
    if (index === 0) {
      return "firstId";
    } else if (index === 19) {
      return "lastId";
    } else {
      return isKey ? item.id : "";
    }
  }

  // destory数据
  destroyListData(list: Array<any>) {
    list = [];
    list.length = 0;
  }
  //  销毁
  destroyed() {
    this.observer.unobserve(this.firstItemDom);
    this.observer.unobserve(this.lastItemDom);
    this.observer.disconnect();
    this.observer = null;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#liContainer {
  height: 300px;
  width: 100%;
  overflow: scroll;
}
ul {
  display: block;
  list-style: none;
}
</style>
