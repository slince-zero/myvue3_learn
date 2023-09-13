<template>
  <div class="basic-layout">
    <!-- 侧边导航栏 -->
    <div class="nav-aside">
      <div class="logo">
        <img src="../assets/logo.png" alt="logo" />
        <h1 v-if="!isCollapse">{{ config.globalName }}</h1>
      </div>
      <el-menu router class="el-menu-vertical" :collapse="isCollapse">
        <!-- 向子组件treeMenu传递数据 -->
        <TreeMenu :routerMenu="routerMenu" :isCollapse="isCollapse"></TreeMenu>
      </el-menu>
    </div>
    <!-- 右侧布局 -->
    <div class="content-right">
      <!-- 顶部导航栏 -->
      <div class="nav-top">
        <!-- 左侧展开收缩侧边导航栏 -->
        <div class="shirink">
          <div @click="handleIsCollapse">
            <el-icon v-if="isCollapse">
              <Expand />
            </el-icon>
            <el-icon v-else>
              <Fold />
            </el-icon>
          </div>
          <!-- 面包屑 -->
          <!-- <bread-crumb/>  这两种书写形式都可以 -->
          <BreadCrumb />
        </div>
        <!-- 右侧用户信息 -->
        <div class="user-info">
          <!-- 下拉菜单 -->
          <el-dropdown trigger="click" @command="handleLogout">
            <div class="user-info-tools">
              <span>{{ username }}</span>
              <el-icon> <Tools /> </el-icon>
            </div>
            <!-- <span class="el-dropdown-link"></span> -->
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="people_center"
                  >个人中心</el-dropdown-item
                >
                <el-dropdown-item command="exit">退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
      <div class="wrapper">
        <router-view v-slot="{ Component }">
          <transition>
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
  </div>

  <!-- 个人中心弹出对话框 -->
  <el-dialog
    class="peopleDialog"
    v-model="peopleCenterVisible"
    title="个人信息修改"
    align-center
    width="40%"
    destroy-on-close
  >
    <el-form
      :model="peopleCenterForm"
      :rules="peopleCenterRules"
      label-width="90"
      ref="peopleCenterFormRef"
    >
      <el-form-item label="用户名：" prop="username">
        <!-- disabled控制当前输入框不可编辑，autocomplete是HTML属性，用于控制浏览器是否自动填充 -->
        <el-input
          v-model="peopleCenterForm.username"
          autocomplete="off"
          placeholder="用户名"
        />
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input
          v-model="peopleCenterForm.password"
          autocomplete="off"
          placeholder="密码"
          show-password
          maxlength="10"
          type="password"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码：" prop="checkPassword">
        <el-input
          v-model="peopleCenterForm.checkPassword"
          autocomplete="off"
          placeholder="请再次输入密码"
          show-password
          maxlength="10"
          type="password"
          clearable
        ></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="peopleCenterVisible = false">Cancel</el-button>
        <el-button
          type="primary"
          @click="handlePeopleCenterSubmit(peopleCenterFormRef)"
        >
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
  import { ref, Ref } from 'vue'
  import { useRouter } from 'vue-router'
  import config from '../config/config.ts'
  import { routerMenu } from '../router/routerMenu.ts'
  import TreeMenu from './treeMenu.vue'
  import BreadCrumb from './breadcrumb.vue'

  const router = useRouter()

  // 定义侧边导航栏是否折叠变量
  let isCollapse: Ref<boolean> = ref(false)

  // 定义加载动画变量
  const isTransition = ref('none')
  // 侧边导航栏折叠按钮实现
  const handleIsCollapse = () => {
    isCollapse.value = !isCollapse.value
    isTransition.value = 'all 0.3s'
  }

  // 定义获取用户名的变量
  const username = ref('小猫1号')

  // 个人中心退出登录回调
  const handleLogout = (key: string) => {
    // 定义一个map对象来存储不同key对应的函数
    const map: any = {
      people_center: handlePeopleCenter,
      exit: handleExit,
    }
    // 调用对应的函数
    map[key]()
  }

  // 个人中心相关内容（变量、规则等）
  const peopleCenterVisible = ref(false)
  const peopleCenterFormRef = ref(null)
  const peopleCenterForm = ref({
    username: '',
    password: '',
    checkPassword: '',
  })
  const peopleCenterRules = ref({
    password: [
      { required: true, message: '请输入密码', trigger: 'blur' },
      { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' },
    ],
    checkPassword: [
      { required: true, message: '请再次输入密码', trigger: 'blur' },
      { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' },
      {
        // @ts-ignore
        validator: (rule: any, value: any, callback: any) => {
          if (value === peopleCenterForm.value.password) {
            callback()
          } else {
            callback(new Error('两次输入密码不一致'))
          }
        },
        trigger: 'blur',
      },
    ],
  })
  // 个人中心弹框打开
  const handlePeopleCenter = () => {
    peopleCenterVisible.value = !peopleCenterVisible.value
  }

  // 个人中心提交表单
  const handlePeopleCenterSubmit = (ref: any) => {
    console.log('提交', ref)
    peopleCenterVisible.value = !peopleCenterVisible.value
  }

  // 退出登录逻辑
  const handleExit = () => {
    // 先写的简单一些，不涉及清除用户信息
    router.push('/login')
  }
</script>

<style scoped lang="scss">
  .basic-layout {
    position: relative;
    .nav-aside {
      position: fixed;
      height: 100vh;
      width: v-bind("isCollapse ? '65px' : '200px'");
      overflow-y: auto;
      transition: v-bind(isTransition);
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

    .content-right {
      margin-left: v-bind("isCollapse ? '65px' : '200px'");
      transition: v-bind(isTransition);
      .nav-top {
        position: fixed;
        top: 0;
        z-index: 99;
        width: 100%;
        right: 0;
        background: #ffff;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        box-sizing: border-box;
        border-bottom: 1px solid #ebeef5;
        .shirink {
          margin-left: v-bind("isCollapse ? '65px' : '200px'");
          display: flex;
          align-items: center;
          .el-icon {
            margin-right: 10px;
            font-size: 16px;
            color: #333;
            margin-top: 1px;
            cursor: pointer;
          }
        }
        .user-info {
          margin-top: 5px;
          display: flex;
          cursor: pointer;

          .user-info-tools {
            display: flex;
            justify-content: center;
            align-items: center;

            span {
              margin-right: 5px;
            }
          }
        }
      }
      .wrapper {
        position: relative;
        min-height: calc(100vh - 50px);
        height: calc(100% - 50px);
        padding: 65px 20px;
        box-sizing: border-box;

        .v-enter-active,
        .v-leave-active {
          transition: opacity 0.2s ease;
        }

        .v-enter-from,
        .v-leave-to {
          opacity: 0;
        }

        // 解决动画冲突的问题 , 延迟执行进入动画即可
        .v-enter-active {
          transition-delay: 0.2s;
        }
      }
    }
  }
</style>
