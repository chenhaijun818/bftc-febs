<template>
  <el-drawer
      v-model="drawer"
      :before-close="onClose"
      title="新增"
      size="50%"
      :close-on-click-modal="false"
  >
    <el-form
        ref="hood-form"
        :model="hood"
        :rules="rules"
        label-position="right"
        label-width="100px"
    >
      <el-form-item label="小区名" prop="ename">
        <el-input v-model="hood.ename" placeholder="请输入小区名"/>
      </el-form-item>
      <el-form-item label="地址" prop="address">
        <el-input v-model="hood.address" placeholder="请输入地址"/>
      </el-form-item>
      <el-form-item label="省市区" prop="location">
        <el-cascader v-model="hood.location" :options="pca"></el-cascader>
      </el-form-item>
    </el-form>
    <!--    <div id="qqmap"></div>-->
    <div slot="footer">
      <el-button type="warning" plain @click="onClose">取消</el-button>
      <el-button type="primary" plain @click="submit">确认</el-button>
    </div>
  </el-drawer>
</template>

<script lang="ts">
// @ts-ignore
import {regionData} from "element-china-area-data"

console.log(regionData)
import {Vue} from "vue-class-component";
import {markRaw} from "vue";

export default class HoodEditor extends Vue {
  name = 'hood-editor'
  visible = false
  pca = regionData
  hood: any = {
    ename: '',
    location: [],
    address: ''
  }
  drawer = markRaw({})
  rules = {
    ename: [
      {
        required: true,
        message: '该项必填'
      }
    ],
    address: [
      {
        required: true,
        message: '该项必填'
      }
    ],
    location: [
      {
        required: true,
        message: '该项必填'
      }
    ]
  }

  show(row = {}) {
    this.hood = row
    this.visible = true
  }

  submit() {
    console.log(this.hood)
  }

  onClose() {
    this.$emit('cancel')
  }
}
</script>

<style scoped lang="scss">

</style>
