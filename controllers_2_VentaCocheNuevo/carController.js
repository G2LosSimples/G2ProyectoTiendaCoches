const Car = require("../models/Car");
const carController = {};

carController.showCarList = async (req,res) => {
    const carList = await Car.find().lean();
    res.render("templates/carList",{carListArray:carList});
}

carController.renderFormCreation = (req,res) => {
    res.render("templates/formCreation");
};

carController.newCarCreation = async (req,res) => {
    const car = new Car(req.body);
    await car.save();
    res.redirect("/");
};


carController.findCarToUpdate = async (req, res) => {
    await Car.findOneAndUpdate({})
}

carController.renderUpdateForm= async (req, res) => {
    const carDetail = await Car.findById({_id:req.params.id}).lean();
    res.render("templates/formUpdate", carDetail);
}

carController.formUpdate = async (req,res) => {
    const filter = {_id:req.params.id};
    const update = req.body;
    await Car.findByIdAndUpdate(filter, update);
    res.redirect("/carList");
}





module.exports = carController;