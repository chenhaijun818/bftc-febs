<template>
  <div class="nav-bar">
    <el-breadcrumb>
      <el-breadcrumb-item v-for="r in liveRoutes">{{ r.name }}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="buttons">
      <el-dropdown trigger="click">
        <div class="user-info">
          <el-image class="avatar" src="/img/avatar.png"></el-image>
          <span class="name">{{ username }}</span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";
import {AppService} from "@/services/app.service";
import router from '@/core/router'
import {UserService} from "@/services/user.service";

const app = new AppService()
const userService = new UserService();

export default class NavBar extends Vue {
  name = 'nav-bar'
  liveRoutes: any = []

  get username() {
    return userService.name
  }

  mounted() {
    this.updateRoutes();
    router.afterEach(() => {
      this.updateRoutes();
    })
  }

  updateRoutes() {
    this.liveRoutes = this.$route.matched.filter(route => route.name !== 'main')
  }

  logout() {
    app.logout()
  }
}
</script>

<style scoped lang="scss">
.nav-bar {
  background-color: #fff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .user-info {
    display: flex;
    align-items: center;
    cursor: pointer;

    .avatar {
      width: 32px;
      height: 32px;
    }

    .name {
      margin-left: 10px;
    }
  }
}
</style>
