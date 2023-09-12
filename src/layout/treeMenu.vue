<template>
  <template v-for="menu in routerMenu">
    <el-sub-menu v-if="menu.children && menu.children.length"> </el-sub-menu>
  </template>
</template>

<script setup lang="ts">
  defineProps({
    routerMenu: {
      type: Array,
      default() {
        return []
      },
    },
  })
</script>
