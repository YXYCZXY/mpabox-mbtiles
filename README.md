> 实现mapbox加载mbtiles矢量瓦片简单示例

## 快速开始
```
yarn        // 安装依赖
yarn start  // 启动服务，默认服务地址是localhost:1234/api
```

## 项目结构

本项目基于Express搭建，并对Express默认的目录结构做了更改。Express默认的目录结构是按照Model、View、Controller组织代码，本项目则是按照服务组织代码。每个服务分配一个目录，每个服务目录下再按照MVC划分文件，各服务间尽量进行代码隔离、数据隔离，便于以后改造为微服务。

本项目的主要代码结构如下，主要的代码逻辑在`app`目录：

```
|-- app/
|   |-- services/                 // API服务目录
|   |   |-- tilesets/             // 地图瓦片服务
|   |   |-- index.js              // 服务总路由
|   |-- index.js                  // 系统入口
|   |-- routes.js                 // 总路由
|-- data/                         // 系统数据目录
```
## 查看结果
启动项目 
GET /api/tilesets                                 // 获取瓦片集列表
GET /api/tilesets/:tilesetId/tilejson             // 获取瓦片集的描述信息
GET /api/tilesets/:tilesetId/html                 // 预览瓦片集
GET /api/tilesets/:tilesetId/{z}/{x}/{y}.{format} // 获取瓦片