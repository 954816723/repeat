<template>
  <el-container height="100%">
    <el-slide style="width:200px">
      <el-menu>
        <el-menu-item>导航</el-menu-item>
        <el-submenu>
          <template slot="title">分类</template>
          <el-menu-item>1</el-menu-item>
          <el-menu-item>2</el-menu-item>
          <el-menu-item>3</el-menu-item>
        </el-submenu>
        <el-menu-item>导航</el-menu-item>
        <el-menu-item>导航</el-menu-item>
        <el-menu-item>导航</el-menu-item>
        <el-menu-item>导航</el-menu-item>
      </el-menu>
    </el-slide>
    <el-container>
      <el-header>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>首页</el-breadcrumb-item>
          <el-breadcrumb-item>面包</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <el-main></el-main>
      <el-footer></el-footer>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {

  }
}
</script>
<style lang="less" scoped>
.bg{
  background:lightcoral;
  height: 30px;
}
</style>

