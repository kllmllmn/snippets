<template>
  <div ref="echartsBar" style="width: 500px; height: 400px"></div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import * as echarts from "echarts";
const echartsBar = ref();
onMounted(() => {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(echartsBar.value);
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
        type: "bar",
        data: [23, 24, 18, 25, 27, 28, 25],
      },
    ],
  };
  // 绘制图表
  myChart.setOption(option);
});
</script>

<style scoped lang="less"></style>
