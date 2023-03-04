<template>
  <div ref="echartsPine" style="width: 500px; height: 400px"></div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import * as echarts from "echarts";
const echartsPine = ref();
onMounted(() => {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(echartsPine.value);
  let option = {
    tooltip: {
      trigger: "item",
    },
    width: 300,
    height: 200,
    series: [
      {
        type: "pie",
        data: [
          {
            value: 335,
            name: "直接访问",
          },
          {
            value: 234,
            name: "联盟广告",
          },
          {
            value: 1548,
            name: "搜索引擎",
          },
        ],
      },
    ],
  };
  // 绘制图表
  myChart.setOption(option);
});
</script>

<style scoped lang="less"></style>
