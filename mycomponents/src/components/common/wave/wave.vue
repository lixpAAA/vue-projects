<template>
  <div class="wrapper" width="100%" :height="height">
    <canvas ref="canvas" width="100%" :height="height" style="left: 0"></canvas>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  components: {}
})
export default class RegularPolygon extends Vue {
  // 定义组件prop
  @Prop({ type: Number, default: 30 }) // 画布高度
  readonly height: number | undefined;
  @Prop({ type: Number, default: 10 }) // 一个波峰的长度
  readonly len: Number | undefined;
  mounted() {
    console.log(this.$refs["canvas"]);
    const canvas: any = this.$refs["canvas"];
    const context = canvas.getContext("2d");
    this.setStyle(context);
    this.drawWave(context, this.height, 10);
  }
  created() {}
  drawWave(
    context: any, // canvas对象
    height: number = 10, // 画布的高度
    len: number // 画布的高度
  ): void {
    this.clearCanvas(context);
    context.save(); // 保存当前变换
    context.moveTo(0, height / 2);
    context.bezierCurveTo(
      len / 2,
      height / 2 - 20,
      (len * 3) / 2,
      20 + height / 2,
      2 * len,
      height / 2
    );
    // context.closePath();
    context.restore();
    context.fill(); // 填充图形
    context.stroke(); // 勾勒外边框
  }
  clearCanvas(context: any) {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  }
  /**
   *@Param(context)  canvas
   *@Param(options)  canvas相关的样式
   *@return void
   */
  setStyle(context: any, options?: any) {
    options = options || {
      fillStyle: "#fff", // 内部填充颜色
      strokeStyle: "#000", // 边框线条颜色
      lineWidth: "1" // 线条宽度
    };
    for (let key in options) {
      context[key] = options[key];
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.wrapper {
  // color: #000
  position: relative;
  overflow: hidden;
}
</style>
