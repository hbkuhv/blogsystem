<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px"><BackstageLeftVue></BackstageLeftVue></el-aside>
      <el-main><BackstageUsermanageVue></BackstageUsermanageVue></el-main>
    </el-container>
  </el-container>
</template>

<script>
import BackstageUsermanageVue from "@/assets/backstage-usermanage.vue";
import BackstageLeftVue from "./backstage-left.vue";
export default {
  components: {
    BackstageUsermanageVue,
    BackstageLeftVue,
  },
  name: "backstage",
};
</script>

<style>
el-aside {
  height: 100%;
}
</style>