<template>
  <div class="wrapper" :style="{width: width + 2+ 'px', height: height + 5 + 'px'}">
    <canvas ref="canvas" :width="width" :height="height"></canvas>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  components: {}
})
export default class RegularPolygon extends Vue {
  // 定义组件prop
  @Prop({ type: [String, Number], default: 10 }) //  定义canvas的宽度
  readonly width: string | number | undefined;
  @Prop({ type: [String, Number], default: 10 }) // 定义canvas的高度
  readonly height: string | number | undefined;
  @Prop({ type: Number, default: 5 }) // 定义图形半径
  readonly radius: number | undefined;
  mounted() {
    const canvas: any = this.$refs["canvas"];
    const context = canvas.getContext("2d");
    this.setStyle(context);
    this.drawDot(context, this.radius, true);
  }
  created() {}
  drawDot(
    context: any, // canvas对象
    radius: number = 5, // 多边形半径
    direction?: boolean // 默认为顺时针， false为逆时针绘制
  ): void {
    context.beginPath();
    context.moveTo(radius, radius); // 从圆心处开始绘制
    context.arc(
      radius + 1,
      radius,
      radius,
      this.rads(-30),
      this.rads(30),
      direction
    );
    context.closePath();
    context.fill(); // 填充图形
    context.stroke(); // 勾勒外边框
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
  // 判断边数 是否为偶数
  rads(angle: number) {
    return (Math.PI * angle) / 180;
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.wrapper {
  // color: #000
  overflow: hidden;
}
</style>
