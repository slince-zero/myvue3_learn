<template>
 <div class="note-list">
  <!-- header -->
  <div class="header-operation">
   <el-form :inline="true" :model="form">
    <el-form-item label="标题">
     <el-input
      clearable
      placeholder="请输入标题"
      v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item><el-button type="primary">查询</el-button></el-form-item>
    <el-form-item><el-button type="info" plain>重置</el-button></el-form-item>
    <el-form-item><el-button type="primary">新增</el-button></el-form-item>
   </el-form>
  </div>
  <!-- main -->
  <el-card shadow="hover" v-for="(item, index) in 6" :key="index">
   <el-image
    src="http://localhost:3000/public/images/1aebb39cb37e6f5ca36cc50ce1edfdbb.png" />
   <div class="card-content">
    <p class="card-title">前端图片上传详解{{ item }}</p>
    <p class="card-sub-title">
     了解图片上传的整个流程 Lorem ipsum dolor sit amet, consectetur adipisicing
     elit. Itaque molestiae neque nihil. Esse, placeat, similique. Ab
     blanditiis, cumque ea earum enim, eum exercitationem, facere iusto minima
     nisi officiis possimus sunt.
    </p>
   </div>
   <div class="card-tips">
    <p>
     <el-icon>
      <Calendar />
     </el-icon>
     创建时间 : <span>2021-09-09 12:12:12</span>
    </p>
    <p>
     <el-icon>
      <Clock />
     </el-icon>
     修改时间 : <span>2021-09-09 12:12:12</span>
    </p>
    <p>
     <el-icon>
      <Discount />
     </el-icon>
     标签 :
     <span>
      <el-tag>标签1</el-tag>
      <el-tag>标签2</el-tag>
      <el-tag>标签3</el-tag>
     </span>
    </p>
    <p>
     <el-icon>
      <Files />
     </el-icon>
     分类 :
     <span>
      <el-tag>分类1</el-tag>
      <el-tag>分类2</el-tag>
      <el-tag>分类3</el-tag>
     </span>
    </p>
   </div>
   <div class="btn-group">
    <el-button plain :icon="View" />
    <el-button plain type="primary" :icon="Edit" />
    <el-button plain type="danger" :icon="Delete" />
   </div>
  </el-card>
  <!-- footer -->
  <div class="footer_operation" style="float: right;">
   <el-footer>
    <el-pagination
     background
     layout="prev, pager, next"
     v-model:page-size="noteList_page.limit"
     v-model:current-page="noteList_page.page"
     :total="noteList_page.totalCount" />
   </el-footer>
  </div>
 </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { View, Edit, Delete } from '@element-plus/icons-vue'
const form = reactive({
 name: '',
})

// 分页
const noteList_page = ref({
 page: 1,
 limit: 10,
 totalCount: 0,
})
</script>

<style scoped lang="scss">
.el-card {
 width: 100%;
 position: relative;
 margin-bottom: 10px;

 :deep(.el-card__body) {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .el-image {
   width: 100px;
   height: 100px;
   border-radius: 50%;
   overflow: hidden;
  }

  .card-content {
   position: relative;
   z-index: 2;
   padding: 0 30px;
   margin-right: 100px;
   box-sizing: border-box;
   flex: 1;

   .card-title {
    color: var(--el-color-primary);
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
   }

   .card-sub-title {
    font-size: 16px;
    color: var(--el-text-color-secondary);
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    line-height: 1.3;
   }
  }

  .card-tips {
   margin-right: 50px;

   p {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: var(--el-text-color-secondary);
    margin-bottom: 10px;

    .el-icon {
     margin-right: 5px;
    }

    &:last-child {
     margin-bottom: 0;
    }

    & > span {
     margin-left: 5px;

     .el-tag {
      margin-right: 5px;
     }
    }
   }
  }

  .btn-group {
   width: 180px;
   display: flex;
   flex-wrap: nowrap;
  }
 }
}
</style>
