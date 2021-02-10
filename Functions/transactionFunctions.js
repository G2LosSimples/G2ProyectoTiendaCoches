const Transaction = require("../models/Transaction");

function getTransactions(){

    return Transaction.find().lean();

}

function getSingleTransaction(id){

    return Transaction.findById(id).lean();

}

function createTransaction(data){

    return new Transaction(data);

}

module.exports = {getTransactions,getSingleTransaction,createTransaction};