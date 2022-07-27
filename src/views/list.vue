<template>
  <div class="container">
    <el-table
        class="list"
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
    <el-pagination background layout="prev, pager, next" :total="total" @current-change="onPageChange"/>
  </div>
</template>

<script lang="ts">
import {Vue} from 'vue-class-component'
import {Client} from "@/core/client/client";

const client = new Client();

Vue.registerHooks(['beforeRouteEnter', 'beforeRouteLeave'])
export default class List extends Vue {
  name = 'list'
  list = []
  total = 0
  pageIndex = 1
  pageSize = 10
  listApi = ''
  apiMethod = ''
  columns = []

  beforeRouteEnter(to: any, from: any, next: any) {
    import(`@/packages${to.path}`).then(m => {
      next((vm: any) => {
        vm.listApi = m.page.listApi
        vm.apiMethod = m.page.apiMethod
        vm.columns = m.page.columns
        vm.getList()
      })
    }).catch(_ => {
      next()
    })
  }

  beforeRouteLeave() {
    this.reset()
  }

  onPageChange(index: number) {
    this.pageIndex = index
    this.getList()
  }

  getList() {
    client.request(this.listApi, {
      pageSize: this.pageSize,
      pageNum: this.pageIndex
    }, this.apiMethod, {}).then(res => {
      if (res) {
        this.list = res.records
        this.total = res.total
      }
    })
  }

  reset() {
    this.list = []
    this.total = 0
    this.listApi = ''
    this.apiMethod = ''
    this.columns = []
    this.pageIndex = 1
  }

}
</script>

<style scoped>
.list {
  margin-bottom: 10px;
}
</style>
