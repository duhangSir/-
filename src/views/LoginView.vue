<template>
  <div class="home">
    <div class="home_form">
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="80px"
        class="demo-ruleForm"
        :size="formSize"
      >
        <el-form-item label="用户名" prop="username" style="width: 300px">
          <el-input v-model="ruleForm.username" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" />
        </el-form-item>
        <div class="form_Img">
          <el-form-item label="验证码" prop="code">
            <el-input v-model="ruleForm.code" />
            <div>
              <img :src="Img" />
            </div>
          </el-form-item>
        </div>
        <el-form-item>
          <el-button type="primary" @click="submitForm()">提交</el-button>
          <el-button @click="resetForm()">获取密码</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import User from '../api/user'
const router = useRouter()
const store = useStore()
const ruleForm = reactive({
  username: 'test',
  password: '1234567',
  code: ''
})
const rules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
})
const Img = ref(null)
// 获取token和图片地址
const token = ref(null)
const gettoken = async () => {
  const response = await User.getToken()
  Img.value = response.data.captchaImg
  token.value = response.data.token
}
gettoken()
const ruleFormRef = ref()
// 点击登录
const submitForm = async () => {
  if (!ruleFormRef.value) return
  await ruleFormRef.value.validate(async (valid) => {
    if (valid) {
      console.log('登录成功')
      const obj = {
        username: ruleForm.username,
        password: ruleForm.password,
        token: token.value,
        code: ruleForm.code
      }
      const response = await User.getLogin(obj)
      if (response.code === 200) {
        store.dispatch('user/setToken', token)
        router.push('/vueadmin')
      }
    } else {
      console.log('登录失败')
    }
  })
}
</script>
<style lang="scss" scoped>
.home {
  background-color: #fafafa;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  position: relative;
  .home_form {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 400px;
    height: 200px;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ::v-deep .el-input__inner {
    height: 40px;
  }
}
</style>
