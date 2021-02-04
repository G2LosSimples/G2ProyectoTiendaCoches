const express = require("express");
const router = express.Router();
const creationController = require("../controllers/creationController");


router.get("/carForm", creationController.renderFormCreation);

router.post("/carCreation", creationController.newCarCreation);

module.exports = router;