<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const statistic = ref(Math.random());
let intervalId: number;

onMounted(() => {
  intervalId = setInterval(() => {
    statistic.value = Math.random();
  }, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <div class="statistics">
    <h1>Statistics page</h1>
  </div>
</template>

<style scoped>
.statistics {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 2em;
  text-align: center;
}
</style>