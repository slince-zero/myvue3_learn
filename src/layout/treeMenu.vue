<template>
  <template v-for="menu in routerMenu">
    <el-sub-menu
      v-if="menu.children && menu.children.length"
      :key="menu.name"
      :index="menu.path"
    >
      <template #title>
        <el-icon v-if="menu.icon">
          <component :is="menu.icon" />
        </el-icon>
        <span v-cloak>{{ menu.meta.title }}</span>
      </template>
      <!-- 递归调用组件，直到没有子菜单 -->
      <TreeMenu :routerMenu="menu.children" />
    </el-sub-menu>
    <el-menu-item v-else :index="menu.path" :key="menu.name">
      <el-icon v-if="menu.icon">
        <component :is="menu.icon" />
      </el-icon>
      <template #title>
        <span v-cloak>{{ menu.meta?.title }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
  defineProps({
    routerMenu: <any>{
      type: Array,
      default() {
        return []
      },
    },
    isCollapse: {
      type: Boolean,
      default: false,
    },
  })
</script>
