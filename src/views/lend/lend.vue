<template>
  <div ref="lendRef" style="height: 400px;">lend</div>
</template>

<script setup lang="ts">
    import * as echarts from 'echarts'

  import { ref, onMounted } from 'vue'

  const lendRef = ref()

  onMounted(() => {
    console.log(lendRef.value) // 打印 DOM 元素的引用

    const myChart = echarts.init(lendRef.value)
    myChart.setOption({
      title: {
        text: 'ECharts 入门示例',
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    })
  })
</script>
