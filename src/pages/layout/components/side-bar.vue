<template>
  <div class="side-bar">
    <router-link class="header" to="/">
      <img class="logo" src="https://bfgxkj-city-1259368925.cos.ap-guangzhou.myqcloud.com/images/logo.svg"
           alt="帮服同城">
      <span>帮服同城管理系统</span>
    </router-link>
    <div class="scroll">
      <el-scrollbar class="scrollbar">
        <el-menu class="menu" :unique-opened="true" background-color="#272c33" text-color="#fff" router
                 :default-active="activeRoute">
          <el-sub-menu v-for="(route, index) in routes" :index="String(index)">
            <template #title>
              <span>{{ route.name }}</span>
            </template>
            <el-menu-item v-for="subRoute in route.children" :index="subRoute.path">
              <template #title>
                <span>{{ subRoute.name }}</span>
              </template>
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import {Vue} from "vue-class-component";

export default class SideBar extends Vue {
  name = "side-bar"
  activeRoute = ''
  routes = []

  mounted() {
    let routes = localStorage.getItem('routes');
    if (routes) {
      this.routes = JSON.parse(routes)
    }
    this.activeRoute = this.$route.path
  }
}
</script>

<style scoped lang="scss">
.side-bar {
  background-color: #272c33;
  color: #fff;
  box-shadow: 2px 0 6px rgb(0 0 0 / 25%);
  height: 100vh;

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: #a5dbfc;
    height: 55px;

    .logo {
      width: 26px;
      height: 26px;
      margin-right: 10px;
    }
  }

  .scroll {
    height: calc(100% - 55px);

    .menu {
      border-right: none;
    }
  }
}
</style>
