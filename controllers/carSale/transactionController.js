const{getSingleCar,updateCar}=require("./carFunctions");
const{getTransactions,getSingleTransaction,createTransaction,benefitsMonth,transactionMonth,transactionYear}=require("./transactionFunctions");

const transactionController ={};

transactionController.showTransactionList = async(req,res)=>res.render("templates/transactionList",{transactionListArray:await getTransactions()});

transactionController.showTransactionDetail = async (req,res)=> res.render("templates/transactionDetailTemplate", await getSingleTransaction({_id:req.params.id}));

transactionController.benefitsMonth = async (req,res)=> res.render("templates/benefitsTemplate",{benefits:await benefitsMonth()});

transactionController.transactionMonth =async (req,res)=> res.render("templates/transactionMonth",{transactionMonthArray:await transactionMonth()});

transactionController.transactionYear =async (req,res)=> res.render("templates/transactionYear",{transactionYearArray:await transactionYear()});

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

    res.redirect("/");

};

module.exports = transactionController;