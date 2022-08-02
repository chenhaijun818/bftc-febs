<template>
  <router-view></router-view>
</template>

<script lang="ts">
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

}

</script>

<style lang="scss">
@import "@/assets/css/reset.css";
@import "@/assets/css/global.css";

#app {
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: 255px auto;
  grid-template-rows: 85px auto 40px;
  grid-template-areas: "sidebar header"
                     "sidebar main"
                     "sidebar footer";

  > :first-child {
    grid-row-start: 1;
    grid-row-end: 4;
  }

}

</style>
