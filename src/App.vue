<template>
  <div class="side-bar">
    <div>logo</div>
    <el-menu
        default-active="2"
        class="side-menu"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <location/>
          </el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group>
          <template #title><span>Group One</span></template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title><span>item four</span></template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon>
          <icon-menu/>
        </el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon>
          <document/>
        </el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon>
          <setting/>
        </el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu>
  </div>
  <div class="main">
    <div class="nav">nav-bar</div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">expand</el-radio-button>
      <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group>
    <router-view/>
    <div class="footer">footer</div>
  </div>
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

  handleOpen() {
  }

  handleClose() {
  }
}

</script>

<style lang="scss">
@import "@/assets/css/reset.css";
@import "@/assets/css/global.css";

#app {
  display: flex;
  width: 100%;
  height: 100%;
}

.side-bar {
  height: 100%;
  flex: 15;
  display: flex;
  flex-direction: column;

  .side-menu {
    flex: 1;
  }
}

.main {
  height: 100%;
  flex: 85;
  padding: 10px;
}

</style>
