const express = require("express");
const router = express.Router();
const transactionController = require("../controllers_2_VentaCocheNuevo/transactionController");

router.get("/transactionList",transactionController.showTransactionList);
router.get("/transactionDetail/:id",transactionController.showTransactionDetail);
router.get("/buyCar/:id", transactionController.buyCar);

module.exports = router;