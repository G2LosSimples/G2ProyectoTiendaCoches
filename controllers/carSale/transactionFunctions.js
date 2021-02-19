const Transaction = require("../../models/Transaction");

function getTransactions(){

    return Transaction.find().lean();

}

function getSingleTransaction(id){

    return Transaction.findById(id).lean();

}

function createTransaction(data){

    return new Transaction(data);

}

async function calculateBenefits(){

    const transactions = await getTransactions();

    let benefits = 0;
    for (let i = 0; i < transactions.length; i++) {
        benefits+=transactions[i].benefit;
    }
    return benefits;

}

async function transactionMonth(){

    const transactions = await getTransactions();
    let transactionsThisMonth = [];
    

    for (let i = 0; i < transactions.length; i++) {
        let monthNumber = transactions[i].transactionDate.getMonth();
        let transactionsMonth = transactions[i];
        let now = new Date();

        if (monthNumber == now.getMonth()){
            transactionsThisMonth.push(transactionsMonth);
        }
    }
    
    return transactionsThisMonth;
}

async function benefitsMonth(){

    let transactions = await transactionMonth();
    let benefitsMonth = 0;

    for (let i = 0; i < transactions.length; i++) {
        benefitsMonth += transactions[i].benefit;
    }
    console.log(benefitsMonth);
    return benefitsMonth;

}



async function transactionYear(){

    const transactions = await getTransactions();
    let transactionsThisYear = [];

    for (let i = 0; i < transactions.length; i++) {
        let yearNumber = transactions[i].transactionDate.getFullYear();
        let transactionsYear = transactions[i];
        let now = new Date();

        if (yearNumber == now.getFullYear()){
            transactionsThisYear.push(transactionsYear);
        }
    }
    
    return transactionsThisYear;
}


module.exports = {getTransactions,getSingleTransaction,createTransaction,benefitsMonth, transactionMonth, transactionYear};