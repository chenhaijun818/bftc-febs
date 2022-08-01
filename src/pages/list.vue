<template>
  <div class="container">
    <div class="filter">
      <template v-for="f in filters">
        <el-input size="large" class="filter-input" v-if="f.type === 'text'" :placeholder="f.placeholder"
                  v-model="params[f.prop]"></el-input>
      </template>
      <template v-for="b in buttons">
        <el-button plain size="large" type="primary" v-if="b === 'search'" @click="search">搜索</el-button>
        <el-button plain size="large" type="success" v-if="b === 'reset'" @click="reset">重置</el-button>
        <el-button plain size="large" v-if="b === 'add'">新增</el-button>
      </template>
    </div>
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
          :formatter="column.filter"
          align="center"
      />
      <el-table-column
          v-if="handlers && handlers.length"
          label="操作"
          align="center"
      >
        <template v-slot="{row}">
          <el-icon class="handler" v-for="h in handlers" :size="20" :color="h.color" @click="h.click(row)">
            <component :is="h.icon"></component>
          </el-icon>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <div>共{{ total }}条</div>
      <el-pagination background layout="prev, pager, next" :total="total" @current-change="onPageChange"/>
    </div>
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
  buttons = []
  params = {}
  paramList = []
  filters = []
  handlers = []

  beforeRouteEnter(to: any, from: any, next: any) {
    console.log('before route enter')
    import(`@/packages${to.path}`).then(m => {
      // 因为在route enter时组件还没有实例化，拿不到this，所以在next的回调中进行赋值
      next((vm: any) => {
        vm.listApi = m.page.listApi
        vm.apiMethod = m.page.apiMethod
        vm.columns = m.page.columns
        vm.paramList = m.page.params
        vm.filters = m.page.filters
        vm.buttons = m.page.buttons
        vm.handlers = m.page.handlers
        vm.getList()
      })
    }).catch(_ => {
      next()
    })
  }

  beforeRouteLeave() {
    this.clear()
  }

  onPageChange(index: number) {
    this.pageIndex = index
    this.getList()
  }

  search() {
    this.pageIndex = 1
    this.getList()
  }

  add() {

  }

  getList() {
    const params = {
      pageSize: this.pageSize,
      pageNum: this.pageIndex,
      ...this.params,
      queryRequest: {
        pageSize: this.pageSize,
        pageNum: this.pageIndex,
      }
    }
    client.request(this.listApi, params, this.apiMethod, {}).then(res => {
      if (res) {
        this.list = res.records || res.rows
        this.total = res.total
      }
    })
  }

  reset() {
    this.params = {}
    this.pageIndex = 1
    this.total = 0
    this.getList()
  }

  clear() {
    this.list = []
    this.total = 0
    this.listApi = ''
    this.apiMethod = ''
    this.columns = []
    this.params = {}
    this.pageIndex = 1
  }

}
</script>

<style lang="scss" scoped>
.container {
  padding: 10px;
  width: 100%;
}

.filter {
  padding: 10px;
  display: flex;
  align-items: center;

  .filter-input {
    width: 180px;
    margin-right: 10px;
  }

}

.list {
  margin-bottom: 10px;

  .handler {
    cursor: pointer;
    margin: 0 5px;
  }
}

.pagination {
  display: flex;
  align-items: center;
}
</style>
