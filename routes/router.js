const express = require('express');
const route = express.Router()
const customerController = require('../controller/cutomerController')
const cardController = require('../controller/cardController')



route.get('/customers', customerController.getAllCustomers )
route.post('/customers', customerController.createCustomer )

route.get('/*', (req, res) => {
    res.send("Send valid request")
})


module.exports = route