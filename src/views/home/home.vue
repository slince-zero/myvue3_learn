<template>
  <div class="home">
    <div class="home-card">
      <card />
    </div>

    <div class="home-lineChart" style="margin: 15px 0">
      <lineChart />
    </div>

    <div class="home-pipeChart" style="margin: 15px 0">
      <pipeChart />
    </div>
  </div>
</template>

<script setup lang="ts">
  import lineChart from './components/lineChart.vue'
  import pipeChart from './components/pipeChart.vue'
  //@ts-ignore
  import card from './components/card.vue'
</script>

<style scoped lang="scss">
  .charts {
    width: 100%;
  }
</style>
