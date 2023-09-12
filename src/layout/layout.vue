<template>
  <div class="basic-layout">
    <!-- 侧边导航栏 -->
    <div class="nav-aside">
      <div class="logo">
        <img src="../assets/logo.png" alt="logo" />
        <h1 v-if="!isCollapse">{{ config.globalName }}</h1>
      </div>
      <el-menu class="el-menu-vertical" :collapse="isCollapse">
        <!-- 向子组件treeMenu传递数据 -->
        <TreeMenu :routerMenu="routerMenu" :isCollapse="isCollapse"></TreeMenu>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, Ref } from 'vue'
  import config from '../config/config.ts'
  import { routerMenu } from '../router/routerMenu.ts'
  import TreeMenu from "./treeMenu.vue"
  // 定义侧边导航栏是否折叠变量
  let isCollapse: Ref<boolean> = ref(false)
</script>

<style scoped lang="scss">
  .basic-layout {
    position: relative;
    .nav-aside {
      position: fixed;
      width: v-bind("isCollapse ? '65px' : '200px'");
      height: 100vh;
      background: #fff;
      overflow-y: hidden;
      border-right: 1px solid #ebeef5;
      z-index: 100; // 控制元素再垂直方向上的堆叠顺序

      .logo {
        padding: 6px 20px 10px v-bind("isCollapse ? '10px' : '20px' ");
        text-align: center;
        display: flex;
        align-items: center;
        cursor: pointer;
        img {
          width: 50px;
          height: 50px;
        }
        h1 {
          width: 80px;
          font-style: 20px;
          line-height: 1.7em;
          color: #4b9e5f;
        }
      }
    }
    .el-menu-vertical {
      border-right: 0;
    }
  }
</style>
