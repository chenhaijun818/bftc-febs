<template>
  <router-view></router-view>
</template>

<script lang="ts">
import {ref} from 'vue'
import {Options, Vue} from "vue-class-component";
import {Menu, Document, Setting, Location} from '@element-plus/icons-vue'

@Options({
  components: {
    'icon-menu': Menu,
    document: Document,
    setting: Setting,
    location: Location
  }
})
export default class App extends Vue {
  isCollapse = ref(true)

  created() {
    // this.addRoutes()
    this.$router.addRoute('main', {
      name: 'menu',
      path: '/system/menu',
      component: import('@/packages/system/menu/menu.vue')
    })
  }

  addRoutes() {
    let routes: any = localStorage.getItem('routes');
    if (routes) {
      routes = JSON.parse(routes);
      for (let route of routes) {
        if (route.children && route.children.length) {
          for (let subRoute of route.children) {
            let newRoute = {
              name: subRoute.name,
              path: subRoute.path,
              component: import(`@/packages/${subRoute.component}.vue`)
            }
            this.$router.addRoute('main', newRoute)
          }
        }
      }
    }
  }

  checkLogin() {
    let token = localStorage.getItem('token');
    if (!token) {
      this.$router.push('/login')
    }
  }
}

</script>

<style lang="scss">
@import "@/assets/css/reset.css";
@import "@/assets/css/global.css";

#app {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 255px auto;
  grid-template-rows: 85px auto 40px;
  grid-template-areas: "sidebar header"
                     "sidebar main"
                     "sidebar footer";
}

#app :first-child {
  grid-row-start: 1;
  grid-row-end: 4;
}

</style>
