<template>
  <div class="nav-bar">nav bar</div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";

export default class NavBar extends Vue {
  name = 'nav-bar'
}
</script>

<style scoped>
.nav-bar {
  background-color: #fff;
  padding: 10px;
}
</style>
