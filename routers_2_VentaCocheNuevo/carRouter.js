const express = require("express");
const router = express.Router();
const carController = require("../controllers_2_VentaCocheNuevo/carController");

router.get("/carList", carController.showCarList);

router.get("/carForm", carController.renderFormCreation);

router.post("/carCreation", carController.newCarCreation);

router.get("/formularioEditar/:id", carController.renderUpdateForm);

router.post("/updateCar/:id", carController.formUpdate);
module.exports = router;