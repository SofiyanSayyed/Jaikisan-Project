const express = require('express');
const mongoose = require('mongoose');

const cardModel = new mongoose.Schema({
    cardNumber: String,
    cardType: {
        type: String,
        enum: ['REGULAR', 'SPECIAL'],
        default: 'REGULAR'
    },
    customerName: String,
    status: {
        type: String,
        enum: ['ACTIVE', 'INACTIVE'],
        // default: 'ACTIVE'
    },  
    vision: String
    // customerID: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Customer'
    // }

})

module.exports = mongoose.model('Card', cardModel);
