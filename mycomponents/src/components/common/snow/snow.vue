<template>
  <div class="wrapper" :style="{width: width + 2+ 'px', height: height + 2 + 'px'}">
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
  @Prop({ type: Number, default: 10 }) //  定义canvas的宽度
  readonly width: number | undefined;
  @Prop({ type: Number, default: 10 }) // 定义canvas的高度
  readonly height: number | undefined;
  @Prop({
    type: Number,
    default: 0
  }) // 定义雪花的级别
  readonly grade: number | undefined;
  @Prop({ type: Object, default: null }) // 定义图形颜色选项
  readonly styleOption: number | undefined;

  mounted() {
    console.log(this.$refs["canvas"]);
    const canvas: any = this.$refs["canvas"];
    const context = canvas.getContext("2d");
    this.setStyle(context);
    this.drawSnow(
      context,
      this.grade,
      Number(this.height) * Math.pow(3, 1 / 3) * 0.5
    );
  }
  created() {}
  drawSnow(
    context: any, // canvas对象
    grade: number = 0, // 多边形的边数,最小为3
    len: number = 5, // 多边形半径
    angle?: number //  初始绘制的角度
  ): void {
    console.log("len:", len);
    angle = angle || 0;
    const deg = Math.PI / 180;
    context.save(); // 保存当前变换
    context.translate(0, len); // 将坐标原点移至左下角
    context.moveTo(0, 0);
    leg(grade);
    context.rotate(-120 * deg);
    leg(grade);
    context.rotate(-120 * deg);
    leg(grade);

    context.closePath();
    context.restore();
    context.fill(); // 填充图形
    context.stroke(); // 勾勒外边框

    function leg(n: number) {
      // 画边函数
      context.save();
      if (n === 0) {
        context.lineTo(len, 0);
      } else {
        context.scale(1 / 3, 1 / 3);
        leg(n - 1);
        context.rotate(60 * deg);
        leg(n - 1);
        context.rotate(-120 * deg);
        leg(n - 1);
        context.rotate(60 * deg);
        leg(n - 1);
      }
      context.restore();
      context.translate(len, 0);
    }
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
