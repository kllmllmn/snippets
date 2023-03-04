<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="socket" name="socket">
      <SocketIO></SocketIO
    ></el-tab-pane>
    <el-tab-pane label="eCharts" name="eCharts">
      <EChartsAll></EChartsAll>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
import SocketIO from "@/components/SocketIO.vue";
import EChartsAll from "./components/EChartsAll.vue";
import { ref } from "vue";
// console.log(import.meta.env.VITE_BASE_URL, "iii");

const activeName = ref("eCharts");

const handleClick = (tab, event) => {
  // console.log(tab, event);
};
</script>

<style scoped></style>
