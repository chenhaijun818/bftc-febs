<template>
  <side-bar></side-bar>
  <nav-bar></nav-bar>
  <router-view></router-view>
  <footer class="footer">footer</footer>
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

<style scoped>
footer {
  background-color: chocolate;
}
</style>
