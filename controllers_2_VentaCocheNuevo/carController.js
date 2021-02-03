const Car = require("../models/Car");
const carController = {};

carController.showCarList = async (req,res) => {
    const carList = await Car.find().lean();
    res.render("templates/carList",{carListArray:carList});
}

module.exports = carController;