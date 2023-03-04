<template>
  <div ref="echartsLine" style="width: 500px; height: 400px"></div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import * as echarts from "echarts";
const echartsLine = ref();
/* ECharts是一款非常强大的数据可视化工具，其中的tooltip提示框功能可以帮助我们更好地展示数据。要设置ECharts的tooltip提示框，可以通过以下步骤实现：

在ECharts的option配置项中，找到tooltip属性，设置其相关参数，如trigger、formatter、backgroundColor、borderColor等。

trigger参数用于设置tooltip的触发方式，可以是'item'（数据项触发）或'axis'（坐标轴触发）。

formatter参数用于设置tooltip的内容格式化函数，可以根据需要自定义展示内容。

backgroundColor和borderColor参数用于设置tooltip的背景色和边框颜色。

可以通过设置axisPointer属性来调整tooltip的位置和样式。

最后，可以通过调整tooltip的zIndex属性来控制其在图表中的层级。

以上就是ECharts tooltip提示框设置的基本步骤，根据实际需求可以进行更加详细的配置和调整。 */
onMounted(() => {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(echartsLine.value);
  let option = {
    tooltip: {
      trigger: "item",
    },
    width: 300,
    height: 200,
    xAxis: {
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {},
    series: [
      {
        type: "line",
        data: [213, 24, 18, 25, 27, 28, 25],
      },
    ],
  };
  // 绘制图表
  myChart.setOption(option);
});
</script>

<style scoped lang="less"></style>
