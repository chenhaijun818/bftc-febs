<template>
  <div class="side-bar">
    <router-link class="header" to="/">
      <img class="logo" src="https://bfgxkj-city-1259368925.cos.ap-guangzhou.myqcloud.com/images/logo.svg"
           alt="帮服同城">
      <span>帮服同城管理系统</span>
    </router-link>
    <el-menu :unique-opened="true" background-color="#272c33" text-color="#fff" router>
      <el-sub-menu v-for="(route, index) in routes" :index="String(index)">
        <template #title>
          <span v-if="route.meta" :class="route.meta.icon"></span>
          <span>{{ route.name }}</span>
        </template>
        <el-menu-item v-for="subRoute in route.children" :index="subRoute.path">
          <template #title>
            <span>{{ subRoute.name }}</span>
          </template>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script>
import {Options, Vue} from "vue-class-component";

@Options({
  props: {
    routes: {
      type: Array,
      default: []
    }
  }
})
export default class SideBar extends Vue {
  name = "side-bar"
}
</script>

<style scoped lang="scss">
.side-bar {
  background-color: #272c33;
  color: #fff;
  box-shadow: 2px 0 6px rgb(0 0 0 / 25%);

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: #a5dbfc;
    padding: 20px;

    .logo {
      width: 26px;
      height: 26px;
      margin-right: 10px;
    }
  }

  .menu {
    background-color: #272c33;
    color: #fff;
    height: 100%;
  }
}
</style>
