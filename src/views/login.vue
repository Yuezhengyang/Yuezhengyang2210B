<template>
  <div class="login">
    <div class="box">
      <h1>UNI-ADMIN</h1>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="0"
        class="demo-ruleForm"
        size="default"
        status-icon
      >
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="ruleForm.password" placeholder="请输入密码" />
        </el-form-item>
        <el-form-item>
          <el-button class="btn" @click="submitForm">立即登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { loginApi } from "@/http/api";
import { useRouter } from "vue-router";
const router = useRouter();
const ruleForm = ref({
  username: "",
  password: "",
});
const rules = ref({
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
});
const ruleFormRef = ref();
const submitForm = () => {
  ruleFormRef.value.validate((valid: any, fields: any) => {
    if (valid) {
      loginApi(ruleForm.value).then((res) => {
        localStorage.setItem("token", res.data.token);
        router.push("/");
        // console.log(res.data.token);
      });
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background-color: #eaeaea;
  overflow: hidden;
  .box {
    width: 400px;

    border: 1px solid #ccc;
    margin: 100px auto;
    box-shadow: 3px 2px 5px #ccc;
    h1 {
      text-align: center;
      padding: 10px 0px;
      border-bottom: 1px solid #ccc;
      color: #6d7478;
    }
    .el-form {
      padding: 20px;
    }
  }
}

::v-deep .el-input__wrapper {
  background-color: #eaeaea !important;
}
.btn {
  background-color: #107d7e;
  color: #fff;
  width: 100%;
  height: 40px !important;
}
</style>
