<template>
  <div class="side-bar">side bar</div>
</template>

<script>
import {Options, Vue} from "vue-class-component";

@Options({
  components: {}
})
export default class SideBar extends Vue {
  name= "side-bar"
}
</script>

<style scoped>
  .side-bar {
    background-color: antiquewhite;
  }
</style>
