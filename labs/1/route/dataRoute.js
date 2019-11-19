const express = require('express')
const dataRoute = express.Router()
const dataController = require('../controller/dataController')

dataRoute.get('/:key',dataController.get)
dataRoute.post('/:key/:value',dataController.add) 
dataRoute.patch('/:key/:value',dataController.update)
dataRoute.remove('/:key',dataController.remove)

module.exports = dataRoute