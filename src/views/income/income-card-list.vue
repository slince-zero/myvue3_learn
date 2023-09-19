<template>
  <el-row :gutter="20">
    <template v-if="cardList.length">
      <el-col
        :xs="24"
        :sm="12"
        :lg="6"
        v-for="item in cardList"
        :key="item.title"
      >
        <el-card shadow="hover">
          <div class="card_bg">
            {{ item.bgText }}
          </div>
          <div class="card_content">
            <p class="title">{{ item.title }}</p>
            <p class="amount">
              <CountTo
                prefix="￥"
                :startVal="0"
                :endVal="item.value"
                :decimals="2"
                class="money"
                :duration="500"
              />
            </p>
          </div>
        </el-card>
      </el-col>
    </template>
    <template v-else>
      <el-col
        :xs="24"
        :sm="12"
        :lg="6"
        style="margin-bottom: 20px"
        v-for="item in 4"
        :key="item"
      >
        <el-skeleton :rows="3" animated />
      </el-col>
    </template>
  </el-row>
</template>

<script setup lang="ts">
  import { CountTo } from 'vue3-count-to'
  import { ref } from 'vue'

  const cardList = ref([
    {
      title: '今日收入',
      value: 100 || 0,
      bgText: '日',
    },
    {
      title: '本月收入',
      value: 2000 || 0,
      bgText: '月',
    },
    {
      title: '今年收入',
      value: 4000 || 0,
      bgText: '年',
    },
    {
      title: '本月工资',
      value: 0 || 0,
      bgText: '固',
    },
    // {
    //   title: "本月工资",
    //   value: Number(monthSalary) || 0,
    //   bgText: '固'
    // }
  ])
</script>

<style scoped lang="scss">
  .el-card {
    position: relative;
    margin-bottom: 10px;

    .card_bg {
      font-size: 80px;
      font-weight: bold;
      color: var(--el-border-color-extra-light);
      position: absolute;
      right: 10px;
      top: 10px;
      pointer-events: none; // 控制元素是否响应鼠标事件
    }
    .card_content {
      display: flex;
      flex-direction: column; // 定义子元素的排列方向为从上到下
      padding: 20px;
      .title {
        font-weight: bold;
        font-size: 16px;
        color: #999;
        padding-left: 10px;
      }
      .amount {
        margin-top: 20px;
        color: #4b9e5f;
        position: relative;
        z-index: 3;
      }
      .money {
        font-weight: bold;
        font-size: 30px;
        margin-left: 5px;
      }
    }
  }
</style>
