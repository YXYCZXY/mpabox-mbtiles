const express = require('express')

const app = express()

const services = require('./services')

app.use('/api', services)

app.listen(1000, () => {
  console.log('listen on 1000')
})