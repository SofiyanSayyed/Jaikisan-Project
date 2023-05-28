const express = require('express')
const customerController = require('../models/customerModel')

const createCustomer = async (req, res) =>{
    try{
        let data = req.body
        // data.status = "INACTIVE"
        // data.address = "adressss"
        const customer = await customerController.create(data)
        if(!customer){
            return res.status(400).send({status: false, message: 'Customer not created'})
        }   
        res.status(201).send(customer)
    }catch(err){
        res.status(500).send({message: err.message})
    }
}



const getAllCustomers = async (req, res) =>{
    try{
        let id = req.params
        const customers = await customerController.find({status: 'ACTIVE'})
        if(customers.length < 1){
            return res.status(400).send({status: false, message: 'No customers found'})
        }
        res.status(200).send(customers)
    }catch(err){
        res.status(500).send({message: err.message})
    }
}


const deleteCustomer = async (req, res) => {

    try{
        let id = req.params
        const customer = await customerController.findOneAndUpdate({isDeleted : false, id : id})
        if(!customer){
            return res.status(400).send({status: false, message: 'Customer not deleted'})
        }
        res.status(200).send({status: true, message: 'Customer deleted'})
    }catch(err){
        res.status(500).send({message: err.message})
    }
}


module.exports = {createCustomer, getAllCustomers, deleteCustomer}