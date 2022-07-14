<template>
  <div class="dashboard">
    <div>dashboard</div>
    <div class="buttons">
      <button class="button" @click="addRoute">add route</button>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";
// import news from '@/views/febs/news/news-list/Index.vue'

export default class Dashboard extends Vue {
  name = 'dashboard'

  addRoute() {
    this.$router.addRoute('main', {
      name: 'news',
      path: '/news/news-list',
      component: () => import('@/views/febs/news/news-list/Index.vue')
    })
  }
}
</script>

<style scoped>

</style>
