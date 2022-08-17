<template>
  <div class="container">
    <div class="filter">
      <template v-for="f in filters">
        <el-input size="large" class="filter-input" v-if="f.type === 'text'" :placeholder="f.placeholder"
                  v-model="params[f.prop]"></el-input>
      </template>
      <el-button v-if="filters" plain size="large" type="primary" @click="search">搜索</el-button>
      <el-button v-if="filters" plain size="large" type="success" @click="reset">重置</el-button>
      <template v-for="b in buttons">
        <el-button plain size="large" @click="buttonClick(b)">{{ b.text }}</el-button>
      </template>
    </div>
    <el-skeleton v-if="!list" :rows="pageSize" animated/>
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
          <el-icon class="handler" v-for="h in handlers" :size="20" :color="h.color" @click="handlerClick(h, row)">
            <component :is="h.icon"></component>
          </el-icon>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        class="pagination"
        :total="total"
        background
        layout="total, sizes, prev, pager, next, jumper"
        @current-change="onPageChange"
        @size-change="onSizeChange"
    />
    <component v-if="modal" :is="modal" @success="onSuccess" @cancel="onCancel"></component>
  </div>
</template>

<script lang="ts">
import {Vue} from 'vue-class-component'
import {Client} from "@/core/client/client";
import {AuthService} from "@/services/auth.service";

const client = new Client();
const authService = new AuthService();

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
  modal = null

  mounted() {
    // 使用setTimeout避免读取到上一个路由的数据
    setTimeout(() => {
      import(`@/packages${this.$route.path}`).then(m => {
        let route = (this.$route.path.split('/')).pop();
        this.listApi = m.page.listApi
        this.apiMethod = m.page.apiMethod
        this.columns = m.page.columns
        this.paramList = m.page.params
        this.filters = m.page.filters
        this.buttons = m.page.buttons.filter((b: Handler) => authService.checkPermission(`${route}:${b.permission}`))
        this.handlers = m.page.handlers.filter((h: Handler) => authService.checkPermission(`${route}:${h.permission}`))
        this.getList()
      }).catch(() => {
        console.log('page not found')
      })
    }, 0)
  }

  onPageChange(index: number) {
    this.pageIndex = index
    this.getList()
  }

  onSizeChange(size: number) {
    this.pageSize = size
    this.getList()
  }

  search() {
    this.pageIndex = 1
    this.getList()
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

  onSuccess() {
    this.reset();
    this.modal = null
  }

  onCancel() {
    this.modal = null
  }

  buttonClick(button: any) {
    this.modal = button.component
  }

  handlerClick(handler: Handler, row: any) {
    handler.click(row).then((res: any) => {
      if (res) {
        this.getList()
      }
    })
  }

  reset() {
    this.params = {}
    this.pageIndex = 1
    this.pageSize = 10
    this.total = 0
    this.getList()
  }

}
</script>

<style lang="scss" scoped>
.container {
  padding: 10px;
  width: 100%;
}

.filter {
  padding: 10px 0;
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
}
</style>
