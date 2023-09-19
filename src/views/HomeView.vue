<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div style="color: #eee">UNI-ADMIN</div>
        <div>
          <el-menu
            default-active="/home"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :ellipsis="false"
            router
          >
            <el-menu-item index="/home">首页</el-menu-item>
            <el-menu-item index="/shops">商品</el-menu-item>
            <el-menu-item index="/goods">订单</el-menu-item>
            <el-menu-item index="/vip">会员</el-menu-item>
            <el-menu-item index="/set">设置</el-menu-item>
            <el-sub-menu index="6">
              <template #title> admin </template>
              <el-menu-item index="2-1">修改</el-menu-item>
              <el-menu-item index="2-2" @click="toback">退出</el-menu-item>
            </el-sub-menu>
          </el-menu>
        </div>
      </el-header>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();
const toback = () => {
  localStorage.removeItem("token");
  router.push("/login");
};
</script>

<style lang="scss" scoped>
.common-layout {
  width: 100vw;
  height: 100vh;
  .el-container {
    width: 100%;
    height: 100%;
    .el-header {
      background-color: #585f65;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
.el-main {
  padding: 0px;
}
</style>
