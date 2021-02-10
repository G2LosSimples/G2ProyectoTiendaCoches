const{getCars,getSingleCar,createCar,deleteCar,updateCar}=require("../Functions/carFunctions");
const Transaction = require("../models/Transaction");

const carController = {};

    carController.showCarList = async (req,res) => res.render("templates/carList",{carListArray:await getCars()});

    carController.renderFormCreation = (req,res) => res.render("templates/formCreation");

    carController.showCarDetail = async (req,res) => res.render("templates/carDetailTemplate", await getSingleCar({_id:req.params.id}));

    carController.renderUpdateForm = async (req, res) => res.render("templates/formUpdate", await getSingleCar({_id:req.params.id}));

    carController.newCarCreation = (req,res) => {

        createCar(req.body).save()
            .then(res.redirect("/carList"))
            .catch((error)=>res.send(`Ha ocurrido un error ${error}`));

    };

    carController.carDelete = (req,res) =>{

        deleteCar({_id:req.params.id})
            .then(res.redirect("/carList"))
            .catch((error)=>res.send(`Ha ocurrido un error ${error}`));

    };

    carController.formUpdate = (req,res) => {

        const filter = {_id:req.params.id};
        const update = req.body;
        updateCar(filter,update)
            .then(res.redirect("/carList"))
            .catch((error)=>res.send(`Ha ocurrido un error ${error}`));

    }

    carController.buyCar = async (req,res) => {

        const carId = req.params.id
        const singleCar = await getSingleCar({_id:carId});
        const benefit = (singleCar.sellingPrice-singleCar.costPrice);
        const newTransaction = new Transaction({userId:"1", carId:carId, total:singleCar.sellingPrice, benefit:benefit});
        await newTransaction.save();
        res.redirect("/");



    }

module.exports = carController;