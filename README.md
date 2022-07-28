# 帮服同城后台管理系统前端架构说明


## 概念说明
- 模块(package)
  + 命名规则 因为模块应尽量保持功能单一，所以命名也应该只用一个单词，比如 bar
- 组件(component)
  + 命名规则 文件名：bar-foo.vue 类名：BarFoo
- 服务(service)
  + 命名规则 文件名：bar-foo.service.ts 类名：BarFooService
  + 使用单例模式用以保证数据共享等
  + 一般这里存放一些本模块内共享的一些缓存数据，还有一些本模块复用率比较高的一些逻辑
- 数据模型(model)
  + 命名规则 文件名：foo-bar.ts 类名：FooBar

## 模块结构说明
每个模块都可以分解为以下结构，有或者可能有那么几个目录

- pages 存放本模块的所有页面
  + components 存放本页面拆分出来的组件
  + models 存放本页面的数据模型
  + pipes 一般没有
  + utils 一般没有
- components 存放在本模块内通用的一些组件
- models 存放在本模块内通用的一些数据模型
- services 存放本模块的服务类, 服务都以单例模式实现
- pipes 存放本模块的过滤器，与utils基本相同
- utils 存放本模块的通用工具，每个工具用一个函数实现，并且每个工具用独立文件承载
- assets 存放一些静态文件，包括css, image, icon等
- packages 存放本模块的子模块每个子模块结构
- core 只有app模块有

整个应用可以视为一个最大的模块，称为app，那么app的模块结构和说明如下

- app
  + pages 存放应用顶层或者通用的一些功能页面，比如登录页，404 页面等
  + components 存放一些在整个应用通用的组件，比如通用button，通用弹窗等
  + models 存放一些在整个应用通用的数据模型，比如user, order, shop等
  + pipes 存放一些整个应用通用的过滤器，比如date, number等
  + assets 存放一些静态文件，比如一些全局样式文件，通用icon图片等
  + services 存放整个应用通用的服务，习惯上有app.service, ui.service等

## 交接说明
