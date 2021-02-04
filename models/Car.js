<<<<<<< HEAD
'use strict';
const {Schema, model} = require('mongoose');

const carSchema = new Schema({
    carBrand: {
        type: String,
        required:true    
    },
    carModel: {
        type: String,
        required:true
    },
    modelYear: {
        type: String,
        required:true
    },
    nextItvDate: String,
=======
const {Schema, model} = require ("mongoose");

const carSchema = new Schema ({
    
    carBrand: String,
    carModel: String,
    modelYear: String,
    nextItvDate: Date,
>>>>>>> creacion
    sellingPrice: Number,
    costPrice: Number,
    leasingPrice: Number,
    leaseDate: Date,
    leaseReturnDate: Date, 
<<<<<<< HEAD
    carImage: {
        type: String,
        required:true
    },
    carColor: {
        type: String,
        required:true
    },
    seatsNumber: {
        type: Number,
        required:true
    },
    doorNumber: {
        type: Number,
        required:true
    },
=======
    carImage: String,
    carColor: String,
    seatsNumber: Number,
    doorNumber: Number,
>>>>>>> creacion
    trunkSize: Number,
    co2Emissions: String,
    carType: String,
    airConditioner: String,
<<<<<<< HEAD
    transmissionType: {
        type: String,
        required:true
    },
    motorType: {
        type: String,
        required:true
    },
    stock: Number,
    availability: String,
    transactionType: String
});



module.exports = model('Car', carSchema, 'cars');
=======
    transmissionType: String,
    motorType: String,
    stock: Number,
    availability: String
});

module.exports = model("Car", carSchema, "cars");
>>>>>>> creacion
