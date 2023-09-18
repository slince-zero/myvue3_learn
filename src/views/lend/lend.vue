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
          <el-button type="primary" @click="handleSearchTableData(searchForm)"
            >查询</el-button
          >
        </el-form-item>
        <el-form-item>
          <el-button type="info" @click="handleResetTableData">重置</el-button>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="handleLendPeopleAddOrEdit('add', {})"
            >新增</el-button
          >
        </el-form-item>
      </el-form>
    </div>

    <el-table
      border
      :data="showTableData"
      :default-sort="{ prop: 'date', order: 'descending' }"
      style="width: 100%"
    >
      <el-table-column
        align="center"
        prop="id"
        label="ID"
        sortable
        width="180"
      />
      <el-table-column align="center" prop="name" label="姓名" width="180" />
      <el-table-column
        align="center"
        prop="money"
        label="总金额（¥）"
        sortable
      />
      <el-table-column align="center" label="操作 ">
        <template #default="scope">
          <el-button plain :icon="View"></el-button>
          <el-button
            plain
            type="success"
            :icon="Edit"
            @click="handleLendPeopleAddOrEdit('edit', scope.row)"
          ></el-button>
          <el-popconfirm
            title="你确定要删除嘛?"
            @confirm="handleLendPeopleDelete(scope.row)"
          >
            <template #reference>
              <el-button plain type="danger" :icon="Delete"></el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      v-model="dialogLendPeopleFormVisible"
      width="30%"
      draggable
      :title="LendPeopleType == 'add' ? '新增借款人' : '编辑借款人'"
    >
      <el-form :model="lendPeopleForm">
        <el-form-item label="借款人名称" :width="100">
          <el-input
            v-model="lendPeopleForm.borrower"
            clearable
            placeholder="请输入借款人名称"
          ></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button type="primary" @click="submitLendPeople(lendPeopleForm)">
          提交
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
  import { Delete, Edit, View, Search } from '@element-plus/icons-vue'
  import { reactive, ref } from 'vue'

  // 搜索借款人
  const searchForm = ref({
    borrower: '',
  })

  // 编辑操作，存储当前正在编辑的借款人数据
  let currentEdit = reactive({
    id: 0,
    name: '',
    money: '',
  })

  interface User {
    id: number
    name: string
    money: number
  }

  let tableData: User[] = reactive([
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
      name: '大黑',
      money: 150,
    },
  ])
  let showTableData: User[] = reactive([...tableData])

  // 借款人信息表单
  const dialogLendPeopleFormVisible = ref(false)
  const lendPeopleForm = ref({
    borrower: '',
  })

  // 定义借款人类型，目的是区分是添加还是编辑
  const LendPeopleType = ref()
  // 添加或编辑借款人
  const handleLendPeopleAddOrEdit = (type: any, item: any) => {
    currentEdit = item
    dialogLendPeopleFormVisible.value = true
    if (type == 'add') {
      LendPeopleType.value = 'add'
    } else {
      LendPeopleType.value = 'edit'
      lendPeopleForm.value.borrower = item.name
    }
  }
  const submitLendPeople = (v: any) => {
    if (LendPeopleType.value === 'add') {
      showTableData.push({
        id: 10,
        name: v.borrower,
        money: 0,
      })
    } else {
      showTableData = showTableData.map((item) => {
        if (item.id == currentEdit.id) {
          item.name = lendPeopleForm.value.borrower
        }
        return item
      })
    }
    dialogLendPeopleFormVisible.value = false
  }

  // 搜索借款人
  const handleSearchTableData = (v: any) => {
    const searchTableData = showTableData.filter((item: any) =>
      item.name.includes(v.borrower),
    )
    showTableData.splice(0, showTableData.length, ...searchTableData)
  }
  // 重置借款人表单
  const handleResetTableData = () => {
    searchForm.value.borrower = ''
    showTableData.splice(0, showTableData.length, ...tableData)
  }

  // 删除借款人
  const handleLendPeopleDelete = (item: any) => {
    const data = showTableData.filter((v) => v.id !== item.id)
    showTableData.splice(0, showTableData.length, ...data)
  }
</script>

<style scoped lang="scss">
  .lend {
    .header-operation {
      margin-bottom: 3px;
      text-align: center;
    }
  }
</style>
