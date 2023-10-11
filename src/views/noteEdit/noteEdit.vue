<template>
 <div class="note-edit">
  <el-card class="box-card">
   <template #header>
    <div class="card-header">
     <span>新增笔记</span>
     <el-input placeholder="笔记标题"></el-input>
     <el-button type="primary">新增</el-button>
    </div>
   </template>
   <MdEditor v-model="text" previewOnly style="height: 78vh;" />
  </el-card>
 </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MdEditor } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'

const text = ref('# Hello Editor')
</script>

<style scoped>
.box-card {
 position: absolute;
 top: 70px;
 left: 20px;
 bottom: 20px;
 right: 20px;
 box-sizing: border-box;
 height: calc(100vh - 90px);
 :deep(.el-card__body) {
  height: 83%;
 }
 .card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .el-input {
   flex: 0.5;
   margin: 0 20px;
  }
 }
}
</style>
