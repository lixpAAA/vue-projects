<template>
  <div class="wrapper">
    <ul id="liContainer">
      <li v-for="item in list" :key="item.id" :id="item.id">{{item.value}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component({
  components: {}
})
export default class SrollView extends Vue {
  observer: any = null
  list: Array<any> = [] // 数据源
  firstItemDom: any // 第一个dom节点
  lastItemDom: any // 最后一个dom节点
  firstItemDomId: any
  lastItemDomId: any
  mounted() {
    let liContainer: any = document.getElementById('liContainer')
    this.firstItemDom = liContainer.firstChild
    this.lastItemDom = liContainer.lastChild
    this.observer = new IntersectionObserver(this.callback)
    this.observer.observe(this.firstItemDom)
    this.observer.observe(this.lastItemDom)
  }
  created() {
    this.createListData(this.list, 0)
    this.firstItemDomId = this.list[0].id
    this.lastItemDomId = this.list[this.list.length - 1].id
    console.log('id:', this.firstItemDomId)
  }
  /*       方法区     */
  // IntersectionObserver回调方法
  callback(entries: any) {
    entries.forEach((entry: any) => {
      console.log(this.firstItemDomId)
      if (Number(entry.target.id) === this.firstItemDomId) {
        console.log('第一个元素进入视区')
      } else if (Number(entry.target.id) === this.lastItemDomId) {
        let length = this.list.length
        console.log('最后一个元素进入视区', length)
        this.createListData(this.list, length)
      }
    })
  }
  // 创建模拟数据
  createListData(list: Array<any>, start: number = 0) {
    for (let i = start; i < start + 20; ++i) {
      list.push({ id: i, value: i + 1 })
    }
  }

  // destory数据
  destroyListData(list: Array<any>) {
    list = []
    list.length = 0
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.wrapper {
  height: 300px;
  width: 100%;
  overflow: auto;
}
ul {
  display: block;
  list-style: none;
}
</style>
