const{getSingleCar,updateCar}=require("./carFunctions");
const{getTransactions,getSingleTransaction,createTransaction,benefitsMonth,benefitsYear,transactionMonth,transactionYear, calculateBenefits}=require("./transactionFunctions");

const transactionController ={};

transactionController.showTransactionList = async(req,res)=>res.render("templates/carSale/transaction_list",{transactionListArray:await getTransactions()});

transactionController.showTransactionDetail = async (req,res)=> res.render("templates/carSale/transaction_detail", await getSingleTransaction({_id:req.params.id}));

transactionController.benefitsMonth = async (req,res)=> res.render("templates/carSale/benefits",{benefitsMonth:await benefitsMonth()});

transactionController.transactionMonth =async (req,res)=> res.render("templates/carSale/transactionMonth",{transactionMonthArray:await transactionMonth()});

transactionController.transactionYear =async (req,res)=> res.render("templates/carSale/transactionYear",{transactionYearArray:await transactionYear()});

transactionController.buyCar = async (req,res) => {

    const singleCar = await getSingleCar({_id:req.params.id});

    const benefit = (singleCar.sellingPrice-singleCar.costPrice);

    const newTransaction = createTransaction({userId:"1", carId:req.params.id, total:singleCar.sellingPrice, benefit:benefit});

    const newStock = singleCar.stock-1;

    if(singleCar.stock>0){
        await newTransaction.save();
        await updateCar({_id:req.params.id},{stock:newStock});

    }
    if(newStock==0){
        await updateCar({_id:req.params.id},{availability:"no disponible"});

    }

    res.redirect("/newCars");

};

module.exports = transactionController;