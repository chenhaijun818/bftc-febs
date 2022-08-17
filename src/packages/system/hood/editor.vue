<template>
  <el-drawer
      class="drawer"
      v-model="drawer"
      :before-close="onClose"
      title="新增"
      size="50%"
      :close-on-click-modal="false"
  >
    <el-form
        ref="hood-form"
        :model="hood"
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
        <el-cascader v-model="hood.location" :options="pca" @change="onCityChange"></el-cascader>
      </el-form-item>
    </el-form>
    <div id="qqmap"></div>
    <template #footer>
      <el-button type="warning" plain @click="onClose">取消</el-button>
      <el-button type="primary" plain @click="submit">确认</el-button>
    </template>
  </el-drawer>
</template>

<script lang="ts">
import {regionData} from "element-china-area-data"
import {Vue} from "vue-class-component";
import {markRaw} from "vue";
import {Client} from "@/core/client/client";

// @ts-ignore
const TMap = window.TMap;
const client = new Client();

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
  map: any

  mounted() {
    this.$nextTick(() => {
      this.map = new TMap.Map("qqmap", {
        zoom: 14,
        center: new TMap.LatLng(39.986785, 116.301012)
      })
      this.map.on("click", this.onChooseLocation)
      const geocoder = new TMap.service.Geocoder()
      geocoder.getLocation({address: '北京市'}).then((result: any) => {
        this.map.setCenter(result.result.location)
      })
    })
  }

  show(row = {}) {
    this.hood = row
    this.visible = true
  }

  submit() {
    client.post('system/tHousingEstate/estateAdd', this.hood).then(res => {
      if (res) {
        this.$emit('success')
      }
    })
  }

  onClose() {
    this.$emit('cancel')
  }

  onCityChange() {
    let address: any = []
    let list = this.pca
    this.hood.location.forEach((code: any) => {
      let target = list.find((e: any) => e.value === code)
      if (target) {
        address.push(target.label);
        list = target.children
      }
    })
    address = address.join('')
    const geocoder = new TMap.service.Geocoder()
    geocoder.getLocation({address}).then((result: any) => {
      this.map.setCenter(result.result.location)
    })
  }

  onChooseLocation(e: any) {
    const location = new TMap.LatLng(e.latLng.lat, e.latLng.lng)
    const geocoder = new TMap.service.Geocoder()
    geocoder.getAddress({location: location}).then((res: any) => {
      this.hood.address = res.result.address
      this.hood.elatitude = e.latLng.lat
      this.hood.elongitude = e.latLng.lng
    })
  }
}
</script>

<style scoped lang="scss">
.drawer {

}
</style>
