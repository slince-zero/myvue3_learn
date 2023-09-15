<template>
  <el-row>
    <el-col :span="24">
      <el-card shadow="hover" style="height: 400px">
        <div ref="chartRef" class="charts" style="height: 400px"></div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script setup lang="ts">
  import {
    Ref,
    ref,
    watchEffect,
    nextTick,
    onMounted,
    onBeforeMount,
    onBeforeUnmount,
  } from 'vue'
  import * as echarts from 'echarts'
  import { EChartsType } from 'echarts'

  const chartRef = ref(null) // 用于获取dom元素
  const chartDom: Ref<EChartsType | null> = ref(null) // 用于接收mychart内容，因为mychart不是全局对象

  const initCharts = () => {
    const myChart = echarts.init(chartRef.value)
    watchEffect(() => {
      myChart.setOption({
        xAxis: {
          data: ['A', 'B', 'C', 'D', 'E'],
        },
        yAxis: {},
        series: [
          {
            data: [10, 22, 28, 43, 49],
            type: 'line',
            stack: 'x',
            areaStyle: {},
          },
          {
            data: [5, 4, 3, 5, 10],
            type: 'line',
            stack: 'x',
            areaStyle: {},
          },
        ],
      })
    })
    chartDom.value = myChart
  }
  //   窗口 resize 事件
  const handleChartResize = () => {
    chartDom.value && chartDom.value.resize()
  }

  const disposeCharts = () => {
    if (chartDom.value) {
      chartDom.value.dispose()
      chartDom.value = null
    }
  }

  onBeforeMount(() => {
    nextTick(() => {
      initCharts()
    })
  })

  onMounted(() => {
    window.addEventListener('resize', handleChartResize)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleChartResize)
    disposeCharts()
  })
</script>
