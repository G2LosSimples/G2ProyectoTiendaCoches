const Car = require("../models/Car");

function recoverCars(){

    return Car.find().lean();

}

module.exports = {recoverCars};


