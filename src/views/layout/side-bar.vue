<template>
  <div class="side-bar">
    <el-menu :unique-opened="true" background-color="#272c33" text-color="#fff" router>
      <el-sub-menu v-for="(route, index) in routes" :index="String(index)">
        <template #title>
          <span v-if="route.meta" :class="route.meta.icon"></span>
          <span>{{ route.name }}</span>
        </template>
        <el-menu-item v-for="(subRoute, i) in route.children" :index="subRoute.path">
          <template #title>
            <span>{{ subRoute.name }}</span>
          </template>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script>
import {Options, Vue} from "vue-class-component";

@Options({
  props: {
    routes: {
      type: Array,
      default: []
    }
  }
})
export default class SideBar extends Vue {
  name = "side-bar"
}
</script>

<style scoped lang="scss">
.side-bar {
  background-color: #272c33;
  color: #fff;
  box-shadow: 2px 0 6px rgb(0 0 0 / 25%);

  .menu {
    background-color: #272c33;
    color: #fff;
    height: 100%;
  }
}
</style>
