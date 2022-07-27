<template>
  <div class="container">
    <el-card class="menu-container">
      <el-tree
          ref="tree"
          class="menu"
          :data="menus"
          node-key="id"
          show-checkbox
          accordion
      ></el-tree>
      <div class="buttons">
        <el-button type="danger" @click="del">删除</el-button>
      </div>
    </el-card>
    <el-card class="menu-editor">
      <div class="title">添加</div>
      <el-form v-if="menu" ref="editor" :model="menu" :rules="rules" label-position="right" label-width="100px">
        <el-form-item label="上级菜单" prop="parentId">
          <el-tree-select
              v-model="menu.parentId"
              :data="menus"
              node-key="id"
              check-strictly
              placeholder="选择上级菜单"
          />
        </el-form-item>
        <el-form-item label="名称" prop="menuName">
          <el-input v-model="menu.menuName"/>
        </el-form-item>
        <el-form-item label="类型" prop="type">
          <el-radio-group v-model="menu.type">
            <el-radio label="0">菜单</el-radio>
            <el-radio label="1">按钮</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item v-show="menu.type === '0'" label="图标" prop="icon">
          <el-input v-model="menu.icon"/>
        </el-form-item>
        <el-form-item v-show="menu.type === '0'" label="路径" prop="path">
          <el-input v-model="menu.path"/>
        </el-form-item>
        <el-form-item v-show="menu.type === '0'" label="组件" prop="component">
          <el-input v-model="menu.component"/>
        </el-form-item>
        <el-form-item label="权限" prop="perms">
          <el-input v-model="menu.perms"/>
        </el-form-item>
        <el-form-item v-show="menu.type === '0'" label="排序" prop="orderNum">
          <el-input-number v-model="menu.orderNum" :min="0" :max="100"/>
        </el-form-item>
      </el-form>
      <div class="buttons">
        <el-button @click="add" type="primary">添加</el-button>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";
import {Client} from "@/core/client/client";
import {ref} from "vue";

const client = new Client()
export default class Menu extends Vue {
  name = 'menu'
  menus = []
  menu: any = null
  tree: any = ref('tree')
  editor: any = ref('editor')
  rules = {
    menuName: [
      {required: true, message: '请填写', trigger: "blur"},
      {min: 2, max: 10, message: '字数2-10', trigger: "blur"}
    ],
    path: {max: 100, message: '不超过100字', trigger: "blur"},
    component: {max: 100, message: '不超过100字', trigger: "blur"},
    perms: {max: 50, message: '不超过50字', trigger: "blur"}
  }

  mounted() {
    this.reset()
    this.getMenu()
  }

  getMenu() {
    client.get("system/menu").then(res => {
      this.menus = res.rows
    })
  }

  del() {
    const keys = this.tree.getCheckedKeys().join(',')
    client.delete(`system/menu/${keys}`).then(res => {
      console.log(res)
    })
  }

  add() {
    this.editor.validate().then((res: any) => {
      if (res) {
        client.post("system/menu", this.menu).then(() => {
          console.log('add success')
          this.reset()
          this.getMenu()
        })
      }
    })
  }

  reset() {
    this.menu = {
      menuId: "",
      menuName: "",
      parentId: "",
      path: "",
      component: "",
      perms: "",
      type: "0",
      orderNum: 1,
      icon: ""
    }
  }

}
</script>

<style scoped lang="scss">
.container {
  background: #f3f5f8 !important;
  display: flex;

  .menu-container {
    background: #fff;
    flex: 1;
    margin-right: 10px;

    .menu {
      margin-bottom: 10px;
    }
  }

  .menu-editor {
    background: #fff;
    flex: 1;

    .title {
      padding: 10px 0;
      font-weight: bold;
    }
  }

}
</style>
