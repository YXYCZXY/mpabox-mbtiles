const express = require('express')
const tilesets = require('./tilesets')
const router = express.Router()


router.use(tilesets)

module.exports = router