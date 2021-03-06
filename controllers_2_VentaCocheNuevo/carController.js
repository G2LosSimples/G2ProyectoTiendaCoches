const{getCars,getSingleCar,createCar,deleteCar,updateCar,findCarByBrand}=require("../Functions/carFunctions");

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

    };

    carController.searchCar = async (req,res) => {

        const searchResult = await findCarByBrand({$text:{$search:req.body.carBrand,$caseSensitive:false}});
        res.render("templates/carList",{carListArray:searchResult});
        
    };


module.exports = carController;