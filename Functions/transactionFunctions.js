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

function deleteTransaction(id){

    return Transaction.deleteOne(id);

}

module.exports = {getTransactions,getSingleTransaction,createTransaction,deleteTransaction};