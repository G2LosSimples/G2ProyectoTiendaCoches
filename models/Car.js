const {Schema, model} = require ("mongoose");

const carSchema = new Schema ({
    
    carBrand: String,
    carModel: String,
    modelYear: String,
    nextItvDate: Date,
    sellingPrice: Number,
    costPrice: Number,
    leasingPrice: Number,
    leaseDate: Date,
    leaseReturnDate: Date, 
    carImage: String,
    carColor: String,
    seatsNumber: Number,
    doorNumber: Number,
    trunkSize: Number,
    co2Emissions: String,
    carType: String,
    airConditioner: String,
    transmissionType: String,
    motorType: String,
    stock: Number,
    availability: String
});

module.exports = model("Car", carSchema, "cars");