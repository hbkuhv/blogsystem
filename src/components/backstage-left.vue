<template>
  <el-row class="tac">
    <el-col :span="12">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">
          <i class="el-icon-user-solid"></i>
          <span slot="title">用户管理</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-tickets"></i>
          <span slot="title">日志管理</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-chat-line-round"></i>
          <span slot="title">评论管理</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "background-left",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
.el-col-12 {
  width: 100%;
  height: 100%;
}
.el-row {
  height: 700px;
  background-color: rgb(84, 92, 100);
}
.el-menu {
  border-right: 0;
}
</style>