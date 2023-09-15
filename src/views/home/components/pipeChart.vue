<template>
  <el-row :gutter="12">
    <el-col :span="8">
      <el-card class="card" shadow="hover" style="height: 350px">
        <div ref="pipeChartRef_one" style="height: 350px"></div>
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card class="card" shadow="hover" style="height: 350px">
        <div ref="pipeChartRef_two" style="height: 350px"></div>
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card class="card" shadow="hover" style="height: 350px">
        <div ref="pipeChartRef_three" style="height: 350px"></div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
  import { ref, onBeforeMount, nextTick } from 'vue'
  import * as echarts from 'echarts'
  const pipeChartRef_one = ref(null)
  const pipeChartRef_two = ref(null)
  const pipeChartRef_three = ref(null)
  const initCharts_one = () => {
    const myChart = echarts.init(pipeChartRef_one.value)
    myChart.setOption({
      series: [
        {
          type: 'pie',
          data: [
            {
              value: 300,
              name: '狗子一号',
            },
            {
              value: 234,
              name: '狗子二号',
            },
            {
              value: 200,
              name: '狗子三号',
            },
            {
              value: 200,
              name: '狗子四号',
            },
            {
              value: 500,
              name: '狗子五号',
            },
          ],
        },
      ],
    })
  }

  const initCharts_two = () => {
    const myChart = echarts.init(pipeChartRef_two.value)
    myChart.setOption({
      series: [
        {
          type: 'pie',
          data: [
            {
              value: 105,
              name: '小猫一号',
            },
            {
              value: 230,
              name: '小猫二号',
            },
            {
              value: 300,
              name: '小猫三号',
            },
            {
              value: 350,
              name: '小猫四号',
            },
            {
              value: 200,
              name: '小猫五号',
            },
          ],
          roseType: 'area',
        },
      ],
    })
  }

  const initCharts_three = () => {
    const myChart = echarts.init(pipeChartRef_three.value)
    myChart.setOption({
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [
            120,
            { value: 189, itemStyle: { color: '#91cc75' } },
            { value: 150, itemStyle: { color: '#7ed3f4' } },
            80,
            { value: 100, itemStyle: { color: '#facc14' } },
            110,
            { value: 140, itemStyle: { color: '#f768a1' } },
          ],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(220, 220, 220, 0.8)',
          },
        },
      ],
    })
  }

  onBeforeMount(() => {
    nextTick(() => {
      initCharts_one(), initCharts_two(), initCharts_three()
    })
  })
</script>

<style scoped lang="scss">
  .card {
    width: 100%;
  }
</style>
