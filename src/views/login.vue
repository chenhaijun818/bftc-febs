<template>
  <div class="login">
    <div>
      <span>用户名：</span>
      <input type="text" v-model="username">
    </div>
    <div>
      <span>密 码：</span>
      <input type="password" v-model="password">
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
  username = 'admin'
  password = '123456'

  mounted() {
    client.get('auth/captcha', {key: ''}).then(res => {
      console.log(res)
    })
  }

  async login() {
    // console.log(this.username, this.password)
    let res1 = await this.getToken()
    console.log(res1)
  }

  getToken() {
    return client.post('auth/oauth/token', {username: 'admin', password: '123456', grant_type: 'password'})
  }
}
</script>

<style scoped>

</style>
