<template>
  <div class="side-bar">side bar</div>
</template>

<script>
import {Options, Vue} from "vue-class-component";

@Options({
  components: {}
})
export default class SideBar extends Vue {
  name = "side-bar"
}
</script>

<style scoped>
.side-bar {
  background-color: #272c33;
  color: #fff;
  box-shadow: 2px 0 6px rgb(0 0 0 / 25%);
  padding: 10px;
}
</style>
