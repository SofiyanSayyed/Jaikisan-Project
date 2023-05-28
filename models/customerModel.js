const express = require('express');
const mongoose = require('mongoose')


const customerModel = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "firstName is required"]
    },
    lastName: {
        type: String,
        required: [true, "lastName is required"]
    },
    mobileNumber: {
        type: String,
        unique: true,
        required: [true, "mobileNumber is required"]
    },
    DOB: {
        type: Date,
        required: [true, "customerID is required"]
    },
    customerID: {
        type: String,
        unique: {
            value: true,
            message: 'This customerID already exists'
        },
        required: [true, "customerID is required"]
    },
    emailID: {
        type: String,
        required: [true, "email is required"],
        // unique: true,
        validate: {
          validator: function (value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(value);
          },
          message: 'Invalid email format',
        },
      },
    address: String,
    status: {
        required:true,
        type: String,
        enum: ['ACTIVE', 'INACTIVE'],
        default: 'ACTIVE'
    },
    isDeleted: {
        type: Boolean,
        default:false
    }
},{timestamps: true});

module.exports = mongoose.model('Customer', customerModel)