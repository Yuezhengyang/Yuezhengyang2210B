<template>
  <header>
    <b>后台管理</b><span style="margin: 0px 10px">></span>相册管理
  </header>
  <div class="top">
    <div class="left">
      <el-form
        :inline="true"
        :model="formInline"
        class="demo-form-inline"
        label-width="0px"
      >
        <el-form-item>
          <el-select v-model="formInline.region" placeholder="请选择" clearable>
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="formInline.user"
            placeholder="请输入图片名称"
            clearable
          />
        </el-form-item>
        <el-form-item>
          <el-button type="success">搜索</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="right">
      <el-button type="success">创建相册</el-button>
      <el-button type="warning">上传图片</el-button>
    </div>
  </div>
  <div style="display: flex">
    <ul class="select">
      <li
        v-for="(item, index) in selectList"
        :key="index"
        :class="{ activecss: active == item.id }"
        @click="changeactive(item.id)"
      >
        {{ item.name }}
        <div>
          {{ item.images_count }}
          <span
            ><el-icon><ArrowDown /></el-icon
          ></span>
        </div>
      </li>
    </ul>
    <div style="flex: 1">
      <ul class="list">
        <li v-for="(item, index) in photoList" :key="index">
          <div class="imgbox">
            <img :src="item.url" alt="" referrerpolicy="no-referrer" />
            <p>{{ item.name }}</p>
          </div>

          <el-button-group class="ml-4">
            <el-button :icon="View" />
            <el-button :icon="Edit" @click="edit(item)" />
            <el-popconfirm
              title="是否删除该图片？"
              confirm-button-text="确定"
              cancel-button-text="取消"
              @confirm="del(item.id)"
            >
              <template #reference>
                <el-button :icon="Delete" />
              </template>
            </el-popconfirm>
          </el-button-group>
        </li>
      </ul>
    </div>
  </div>
  <el-dialog v-model="dialogVisible" title="提示" width="30%">
    <el-form :model="form" label-width="120px" label-position="top">
      <el-form-item label="请输入新昵称">
        <el-input v-model="form.name" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="addsub"> 确定 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { leftApi, photoApi, editApi, delApi } from "@/http/api";
import { ref } from "vue";
import { ArrowDown, View, Edit, Delete } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
const selectList: any = ref([]);
leftApi(1).then((res) => {
  selectList.value = res.data.list;
  console.log(res);
});
const dialogVisible = ref(false);
const active = ref(564);
const photoList: any = ref([]);
const formInline = ref({
  user: "",
  region: "",
});
const form = ref({
  name: "",
  id: 0,
});
const changeactive = (id: number) => {
  active.value = id;
  getphoto();
};
const getphoto = () => {
  photoApi(active.value, 1).then((res) => {
    photoList.value = res.data.list;
    console.log(res);
  });
};
getphoto();
const edit = (item: any) => {
  dialogVisible.value = true;
  form.value = JSON.parse(JSON.stringify(item));
  console.log(form.value);
};
const addsub = () => {
  editApi(form.value.id, { name: form.value.name }).then((res) => {
    if (res.data == true) {
      ElMessage.success("修改成功");
    }
    dialogVisible.value = false;
    getphoto();
  });
};
const del = (id: number) => {
  delApi({ ids: [id] }).then((res) => {
    if (res.data == true) {
      ElMessage.success("删除成功");
    }
    getphoto();
    leftApi(1).then((res) => {
      selectList.value = res.data.list;
      console.log(res);
    });
  });
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  border-bottom: 1px solid #ccc;
  padding: 10px 30px;
  background-color: #eaeaea;
}
.top {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
  border-bottom: 1px solid #ccc;
}
::v-deep .el-input__wrapper {
  background-color: #eaeaea !important;
}
.select {
  list-style: none;
  width: 170px;
  height: 76vh;
  background-color: #fefefe;
  li {
    padding: 10px;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    div {
      width: 40px;
      height: 25px;
      line-height: 25px;
      text-align: center;
      background-color: #f8f8f8;
      border: 1px solid #ccc;
      border-radius: 3px;
    }
  }
}
.ml-4 {
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
}
.list {
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;
  li {
    width: 19%;
    margin-top: 10px;
    .imgbox {
      width: 100%;
      position: relative;
      img {
        width: 100%;
        height: 150px;
      }
      p {
        position: absolute;
        padding: 5px 10px;
        bottom: 2px;
        left: 0px;
        width: 100%;
        background-color: rgb(0, 0, 0, 0.3);
        color: #fff;
      }
    }
  }
}
.activecss {
  background-color: #eff7ea;
  color: #67c13a;
}
</style>
