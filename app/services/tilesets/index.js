const router = require('express').Router()
const tilesets = require('./controller')

router.get('/tilesets', tilesets.list)// 获取瓦片集列表
router.get('/tilesets/:tilesetId/tilejson', tilesets.getTilejson) // 获取瓦片集的描述信息 通过生成的瓦片描述信息生成瓦片
router.get('/tilesets/:tilesetId/html', tilesets.getHtml)// 预览瓦片集
router.get('/tilesets/:tilesetId/:z(\\d+)/:x(\\d+)/:y(\\d+).:format([\\w\\.]+)',tilesets.getTile) // 获取瓦片

module.exports = router