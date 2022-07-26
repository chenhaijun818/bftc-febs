<template>
  <div class="container">
    <el-table
        :data="list"
        border
    >
      <el-table-column
          v-for="column in columns"
          :key="column.name"
          :label="column.label"
          :prop="column.prop"
          align="center"
      />
    </el-table>
  </div>
</template>

<script lang="ts">
import {Vue} from 'vue-class-component'
import {Client} from "@/core/client/client";

const client = new Client();

Vue.registerHooks(['beforeRouteEnter'])
export default class List extends Vue {
  name = 'list'
  list = []
  listApi = ''
  apiMethod = ''
  columns = []

  beforeRouteEnter(to: any, from: any, next: any) {
    console.log('before route enter')
    import(`@/packages${to.path}`).then(m => {
      next((vm: any) => {
        vm.listApi = m.page.listApi
        vm.apiMethod = m.page.apiMethod
        vm.columns = m.page.columns
        vm.getList()
      })
    })
  }

  getList() {
    // console.log(this.listApi, this.apiMethod)
    client.request(this.listApi, {}, this.apiMethod, {}).then(res => {
      console.log(res)
    })
  }

}
</script>

<style scoped>

</style>
