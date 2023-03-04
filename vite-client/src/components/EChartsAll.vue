<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="bar" name="bar">
      <EChartsBar></EChartsBar>
    </el-tab-pane>
    <el-tab-pane label="line" name="line">
      <EChartsLine></EChartsLine>
    </el-tab-pane>
    <el-tab-pane label="pie" name="pie">
      <EChartsPie></EChartsPie>
    </el-tab-pane>
    <el-tab-pane label="scatter" name="scatter">
      <EchartsScatter></EchartsScatter>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
import EChartsBar from "./ECharts/EChartsBar.vue";
import EChartsLine from "./ECharts/EChartsLine.vue";
import EChartsPie from "./ECharts/EChartsPie.vue";
import EchartsScatter from "./ECharts/EchartsScatter.vue";
import { ref } from "vue";

const activeName = ref("bar");

const handleClick = (tab, event) => {
  // console.log(tab, event);
};
</script>

<style scoped></style>
