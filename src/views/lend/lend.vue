<template>
  <div class="lend">
    <div class="header-operation">
      <el-form style="width: 100%" :inline="true" :model="searchForm">
        <el-form-item label="姓名">
          <el-input
            v-model="searchForm.borrower"
            clearable
            :prefix-icon="Search"
            style="width: 100%"
            placeholder="请输入姓名"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="info">重置</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">新增</el-button>
        </el-form-item>
      </el-form>
    </div>

    <el-table
      :data="tableData"
      :default-sort="{ prop: 'date', order: 'descending' }"
      style="width: 100%"
    >
      <el-table-column align="center" prop="id" label="ID" sortable width="180" />
      <el-table-column align="center" prop="name" label="姓名" width="180" />
      <el-table-column align="center" prop="money" label="总金额" sortable />
      <el-table-column align="center" label="操作 " />
    </el-table>
  </div>
</template>

<script setup lang="ts">
  import { Delete, Edit, View, Search } from '@element-plus/icons-vue'
  import { ref } from 'vue'

  // 搜索借款人
  const searchForm = ref({
    borrower: '',
  })

  interface User {
    id: number
    name: string
    money: number
  }

  const tableData: User[] = [
    {
      id: 1,
      name: '小明',
      money: 120,
    },
    {
      id: 2,
      name: '小红',
      money: 100,
    },
    {
      id: 3,
      name: '小白',
      money: 200,
    },
    {
      id: 4,
      name: '小黑',
      money: 150,
    },
  ]
</script>
