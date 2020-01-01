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
  @Prop({
    type: Number,
    default: 3,
    validator: function(value) {
      if (value >= 3) {
        return true;
      }
      throw new Error("the prop of lineNumber need  >= 3 !");
    }
  }) // 定义多边形的边数
  readonly lineNumber: number | undefined;
  @Prop({ type: Number, default: 5 }) // 定义图形半径
  readonly radius: number | undefined;
  @Prop({ type: Object, default: null }) // 定义图形颜色选项
  readonly styleOption: number | undefined;

  mounted() {
    console.log(this.$refs["canvas"]);
    const canvas: any = this.$refs["canvas"];
    const context = canvas.getContext("2d");
    this.setStyle(context);
    this.drawPolygon(
      context,
      this.lineNumber,
      this.radius,
      this.radius,
      this.radius
    );
  }
  created() {}
  drawPolygon(
    context: any, // canvas对象
    lineNumber: number = 3, // 多边形的边数,最小为3
    centerX: number = 5, // 中心x坐标
    centerY: number = 5, // 中心y坐标
    radius: number = 5, // 多边形半径
    angle?: number, //  初始绘制的角度
    direction?: boolean // 默认为顺时针， false为逆时针绘制
  ): void {
    angle = angle || this.isEven(lineNumber) ? Math.PI / lineNumber : 0;
    direction = direction || false;
    const startX: number = centerX + radius * Math.sin(angle); // 起点X
    const startY: number = centerY - radius * Math.cos(angle); // 起点Y
    context.beginPath();
    context.moveTo(startX, startY);
    const delta = (2 * Math.PI) / lineNumber;
    for (let i = 1; i < lineNumber; ++i) {
      angle += !direction ? delta : -delta;
      context.lineTo(
        centerX + radius * Math.sin(angle),
        centerY - radius * Math.cos(angle)
      );
    }
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
  isEven(lineNumber: number) {
    return lineNumber % 2 === 0;
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
