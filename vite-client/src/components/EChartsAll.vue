<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="bar" name="bar">
      <EChartsBar></EChartsBar>
    </el-tab-pane>
    <el-tab-pane label="line" name="line">
      <EChartsLine></EChartsLine>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
import EChartsBar from "./ECharts/EChartsBar.vue";
import EChartsLine from "./ECharts/EChartsLine.vue";
import { ref } from "vue";

const activeName = ref("bar");

const handleClick = (tab, event) => {
  // console.log(tab, event);
};
</script>

<style scoped></style>
