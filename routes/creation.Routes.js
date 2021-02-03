const express = require("express");
const router = express.Router();
const creationController = require("../controllers/creation.Controller");


router.get("/carForm", creationController.renderFormCreation);

router.post("/carCreation", creationController.newCarCreation);

module.exports = router;