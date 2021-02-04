const Car = require("../models/Car");
const creationController = {};

creationController.renderFormCreation = (req,res) => {
    res.render("templates/formCreation");
};

creationController.newCarCreation = async (req,res) => {
    const car = new Car(req.body);
    await car.save();
    res.redirect("/");
};



module.exports = creationController;