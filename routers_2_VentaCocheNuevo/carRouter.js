const express = require("express");
const router = express.Router();
const carController = require("../controllers_2_VentaCocheNuevo/carController");

router.get("/carList", carController.showCarList);

router.get("/carForm", carController.renderFormCreation);

router.post("/carCreation", carController.newCarCreation);

module.exports = router;