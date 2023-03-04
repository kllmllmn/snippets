<template>
  <div ref="echartsScatter" style="width: 500px; height: 400px"></div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import * as echarts from "echarts";
const echartsScatter = ref();
onMounted(() => {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(echartsScatter.value);
  let option = {
    tooltip: {
      trigger: "axis",
    },
    width: 300,
    height: 200,
    xAxis: {
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {},
    series: [
      {
        type: "scatter",
        data: [220, 182, 191, 234, 290, 330, 310],
      },
    ],
  };
  // 绘制图表
  myChart.setOption(option);
});
</script>

<style scoped lang="less"></style>
