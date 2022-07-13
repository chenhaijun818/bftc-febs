<template>
  <side-bar></side-bar>
  <nav-bar></nav-bar>
  <div class="container">
    <router-view></router-view>
  </div>
  <footer class="footer">
    <span>© 2022</span>
    <a target="_blank" href="https://mrbird.cc">MrChan</a>
    <span>- FEBS</span>
  </footer>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import SideBar from './side-bar.vue'
import NavBar from './nav-bar.vue'

@Options({
  components: {
    'side-bar': SideBar,
    'nav-bar': NavBar
  }
})
export default class Layout extends Vue {
  name = 'layout'

  created() {
    console.log('layout created')
  }
}
</script>

<style scoped lang="scss">
.container {
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
}
</style>
