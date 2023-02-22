<template>
  <SocketIO></SocketIO>
</template>

<script setup>
import SocketIO from "@/components/SocketIO.vue";
console.log(import.meta.env.VITE_BASE_URL, "iii");
</script>

<style scoped></style>
