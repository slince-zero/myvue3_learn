<!-- 
  在路由中定义meta，设置title，使用toute.matched获取路由列表，循环遍历拿到title
 -->
<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item
      v-for="(item, index) in breadCrumbList"
      :key="item.path"
    >
      <!-- router-link用于生成a标签，进行跳转 -->
      <router-link :to="{ path: item.path }" v-if="index === 0">
        {{ item.meta.title }}
      </router-link>
      <span v-else>{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import { computed } from 'vue'

  const route = useRoute()
  const breadCrumbList = computed(() => {
    // 返回匹配到的路由列表
    return route.matched
  })
</script>
