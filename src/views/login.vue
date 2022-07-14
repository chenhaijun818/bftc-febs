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
    <div>
      <span>验证码：</span>
      <input type="text" v-model="code">
    </div>
    <div>
      <img :src="codeUrl" alt="验证码">
    </div>
    <div class="buttons">
      <button class="button" @click="login">登录</button>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";
import {Client} from "@/core/client/client";
import {randomNum} from "@/core/client/fn";
import {host} from "@/core/client/config";

let client = new Client();

export default class Login extends Vue {
  name = 'login'
  username = 'admin'
  password = '123456'
  key = randomNum(24, 16)
  codeUrl = `${host}/auth/captcha?key=${this.key}`
  code = ''

  async mounted() {

  }

  async login() {
    if (!this.code) {
      return
    }
    let res1: any = await this.getToken()
    if (res1) {
      localStorage.setItem('access_token', res1.access_token)
      localStorage.setItem('refresh_token', res1.refresh_token)
    }

    let res2 = await client.get(`system/menu/${this.username}`);
    if (res2) {
      localStorage.setItem('permissions', JSON.stringify(res2.permissions))
      localStorage.setItem('routes', JSON.stringify(res2.routes))
    }
    this.$router.back()
  }

  getToken() {
    return fetch(`${host}/auth/oauth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ZmViczoxMjM0NTY=',
        userType: 'bs'
      },
      body: new URLSearchParams({
        username: this.username,
        password: this.password,
        grant_type: 'password',
        code: this.code,
        key: this.key
      })
    }).then(res => res.json())
  }
}
</script>

<style scoped>

</style>
