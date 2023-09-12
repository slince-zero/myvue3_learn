<template>
  <div class="login">
    <div class="container">
      <div class="header">
        <img src="../../assets/logo.png" alt="" />
        <h1>{{ config.globalName }}</h1>
      </div>
      <div class="content">
        <el-form ref="userFormRef" :model="userForm" :rules="rules">
          <el-form-item prop="username">
            <el-input
              placeholder="用户名："
              v-model="userForm.username"
              clearable
              autocomplete="off"
            >
              <template #prefix>
                <el-icon>
                  <User />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              placeholder="密码："
              v-model="userForm.password"
              show-password
              clearable
              autocomplete="off"
              @keyup.enter="submitForm(userFormRef)"
            >
              <template #prefix>
                <el-icon>
                  <Lock />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="captcha" v-if="loginOrRegister === 'login'">
            <el-input
              placeholder="验证码："
              v-model="userForm.captcha"
              clearable
              autocomplete="off"
              @keyup.enter="submitForm(userFormRef)"
            >
              <template #prefix>
                <el-icon>
                  <ScaleToOriginal />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>

          <el-form-item
            class="auxiliary-box"
            prop="storePassword"
            v-if="loginOrRegister === 'login'"
          >
            <el-checkbox
              v-model="userForm.storePassword"
              label="记住密码"
              size="large"
            />
            <span @click="handleForgotPassword">忘记密码？</span>
          </el-form-item>

          <el-form-item>
            <div class="btn_group">
              <el-button
                color="#4b9e5f"
                class="btn_login"
                @click="submitForm(userFormRef)"
                >{{
                  loginOrRegister === 'login' ? '登 录' : '注 册'
                }}</el-button
              >
              <el-button
                color="#4b9e5f"
                style="background-color: #4b9e5f"
                @click="handleToggleLoginOrRegister"
              >
                <el-icon>
                  <Refresh />
                </el-icon>
              </el-button>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import config from '../../config/config'
  import { ref, Ref } from 'vue'
  import { ElMessage, type FormInstance } from 'element-plus'
  import { useRouter } from 'vue-router'
  import { useToggle } from '@vueuse/core' // 用于创建一个切换按钮
  const userFormRef = ref<FormInstance>()
  const router = useRouter()

  // 定义userForm的类型
  interface IUserForm {
    username: string
    password: string
    storePassword: boolean
    captcha: string // 验证码
  }

  // 定义表单
  const userForm: Ref<IUserForm> = ref({
    username: '',
    password: '',
    storePassword: false,
    captcha: '',
  })

  // 定义校验规则
  const rules = ref({
    username: [
      { required: true, message: '请输入用户名', trigger: 'blur' },
      { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' },
    ],
    password: [
      { required: true, message: '请输入密码', trigger: 'blur' },
      { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' },
    ],
    captcha: [
      { required: true, message: '请输入验证码', trigger: 'blur' },
      { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' },
    ],
  })

  // 登录或注册状态切换
  const loginOrRegister = ref('login')
  const toggleLoginOrRegister = useToggle(loginOrRegister)
  const handleToggleLoginOrRegister = () => {
    if (loginOrRegister.value === 'login') {
      toggleLoginOrRegister('register')
    } else {
      toggleLoginOrRegister('login')
    }
  }

  // 提交表单
  const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
      if (valid) {
        if (loginOrRegister.value === 'login') {
          // 登录逻辑
          loginFn(formEl)
        } else {
          // 注册逻辑
          registerFn(formEl)
        }
      }
    })
  }

  // 登录功能
  const loginFn = (formEl: any) => {
    if (!formEl) return
    formEl.validate((valid: any) => {
      if (valid) {
        // 登录成功
        ElMessage({
          message: '登录成功',
          type: 'success',
        })
        router.push('/')
      } else {
        ElMessage({
          message: '登录失败',
          type: 'error',
        })
      }
    })
  }

  // 注册功能
  const registerFn=(formEl: any)=>{
    if(!formEl) return
    formEl.validate((valid: any) => {
      if (valid) {
        // 注册成功
        ElMessage({
          message: '注册成功',
          type: 'success',
        })
      } else{
        ElMessage({
          message: '注册失败',
          type: 'error',
        })
      }
    })
  }

  // 忘记密码，提示用户
  const handleForgotPassword = () => {
    ElMessage({
      message: '请联系管理员',
      type: 'warning',
    })
  }
</script>

<style scoped lang="scss">
  .login {
    background: url('../../assets/bg.svg') center 110px / 100% no-repeat
      var(--el-border-color-extra-light);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: auto;

    .container {
      width: 400px;
      border-radius: 10px;
      padding: 40px 30px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transform: scale(1.2);

      .header {
        display: flex;
        align-items: center;

        img {
          width: 60px;
          height: 60px;
        }

        h1 {
          margin-left: 10px;
          font-weight: bold;
          font-size: 30px;
          color: #4b9e5f;
        }
      }
      .content {
        width: 300px;
        margin-top: 30px;

        .auxiliary-box {
          :deep(.el-form-item__content) {
            display: flex;
            justify-content: space-between !important;
            align-items: center;
            & > span {
              color: #4b9e5f;
              cursor: pointer;
            }
          }
        }
        .btn_group {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .btn_login {
            flex: 1;
          }
        }
      }
    }
  }
</style>
