<template>
  <div class="nav-bar">
    <el-breadcrumb>
      <el-breadcrumb-item v-for="r in liveRoutes">{{ r.name }}</el-breadcrumb-item>
    </el-breadcrumb>
    <button @click="logout">logout</button>
    <div class="buttons">
      <el-dropdown>
        <el-image class="avatar" src="/img/avatar.png"></el-image>
        <span>{{ username }}</span>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";
import {AppService} from "@/services/app.service";
import router from '@/core/router'

const app = new AppService()

export default class NavBar extends Vue {
  name = 'nav-bar'
  username = ''
  liveRoutes: any = []

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
    console.log('logout')
    app.logout()
  }
}
</script>

<style scoped lang="scss">
.nav-bar {
  background-color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .avatar {
    width: 32px;
    height: 32px;
  }
}
</style>
