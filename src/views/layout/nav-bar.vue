<template>
  <div class="nav-bar">
    <el-button @click="logout">log out</el-button>
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";
import {AppService} from "@/services/app.service";

const app = new AppService()

export default class NavBar extends Vue {
  name = 'nav-bar'

  logout() {
    console.log('logout')
    app.logout()
  }
}
</script>

<style scoped>
.nav-bar {
  background-color: #fff;
  padding: 10px;
}
</style>
