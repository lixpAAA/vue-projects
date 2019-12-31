<template>
  <div class="wrapper"></div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component({
  components: {}
})
export default class ClassName extends Vue {
  mounted() {}
  created() {}
  drawPolygon(
    context: any, // canvas对象
    centerX: number, // 中心x坐标
    centerY: number, // 中心y坐标
    radius: number, // 多边形半径
    angle: number = 0, //  初始绘制的角度
    direction: boolean = true // 默认为顺时针， false为逆时针绘制
  ): void {
    const startX = centerX + radius * Math.sin(angle) // 起点X
    const startY = centerY - radius * Math.cos(angle) // 起点Y
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.wrapper {
}
</style>
