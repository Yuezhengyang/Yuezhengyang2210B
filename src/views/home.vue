<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <el-menu
          active-text-color="#ffd04b"
          background-color="#fff"
          class="el-menu-vertical-demo"
          default-active="/backstage"
          text-color="#444"
          router
        >
          <el-menu-item index="/backstage">
            <el-icon><icon-menu /></el-icon>
            <span>后台首页</span>
          </el-menu-item>
          <el-menu-item index="/photo">
            <el-icon><setting /></el-icon>
            <span>相册管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.common-layout {
  width: 100%;
  height: 100%;
  background-color: #e5e5e5;
}
.el-menu {
  height: 647px;
}
.el-main {
  background-color: #e5e5e5 !important;
  padding: 0px !important;
}
</style>
