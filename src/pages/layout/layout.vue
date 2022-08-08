<template>
  <side-bar></side-bar>
  <nav-bar></nav-bar>
  <div class="app-container">
    <router-view :key="key"></router-view>
  </div>
  <footer class="footer">
    <span>
      © {{ year }}
      <a target="_blank" href="https://mrbird.cc">MrChan</a>
      - FEBS
    </span>
    <span>版本号：{{ version }}</span>
  </footer>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import SideBar from './components/side-bar.vue'
import NavBar from './components/nav-bar.vue'
import {version} from '../../../package.json'

Vue.registerHooks(['beforeRouteUpdate'])
@Options({
  components: {
    'side-bar': SideBar,
    'nav-bar': NavBar
  }
})
export default class Layout extends Vue {
  name = 'layout'
  routes: any[] = []
  key = ''
  year = (new Date()).getFullYear()
  version = version

  beforeRouteUpdate(to: any, from: any, next: any) {
    this.key = to.name
    next()
  }

}
</script>

<style scoped lang="scss">
.app-container {
  background-color: #f3f5f8;
  padding: 10px;

  > div:first-child {
    background-color: #fff;
    height: 100%;
  }
}

footer {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 10%);
  > a, > span {
    margin: 0 10px;
  }
}
</style>
