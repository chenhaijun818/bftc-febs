<template>
  <div class="user">user</div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";

export default class User extends Vue {
  name = 'user'
}
</script>

<style scoped lang="scss">
.user {
  padding: 10px;
}
</style>
