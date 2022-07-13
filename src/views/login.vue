<template>
  <div class="login">
    <div>
      <span>用户名：</span>
      <input type="text">
    </div>
    <div>
      <span>密 码：</span>
      <input type="password">
    </div>
    <div class="buttons">
      <button class="button" @click="login">登录</button>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";
import {Client} from "@/core/client/client";

let client = new Client();

export default class Login extends Vue {
  name = 'login'

  async login() {
    let res1 = await this.getToken()
    console.log(res1)
  }

  getToken() {
    return client.post('auth/oauth/token', {username: 'admin', password: '123456'})
  }
}
</script>

<style scoped>

</style>
