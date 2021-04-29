const express = require('express')

const app = express()

const productController = require('./Controller/productController')

app.use('/', productController)

module.exports = app
