const{getSingleCar,updateCar}=require("../Functions/carFunctions");
const{getTransactions,getSingleTransaction,createTransaction,deleteTransaction}=require("../Functions/transactionFunctions");

const transactionController ={};

transactionController.showTransactionList = async(req,res)=>res.render("templates/transactionList",{transactionListArray:await getTransactions()});

transactionController.showTransactionDetail = async (req,res)=> res.render("templates/transactionDetailTemplate", await getSingleTransaction({_id:req.params.id}));

transactionController.transactionDelete = (req,res) =>{

    deleteTransaction({_id:req.params.id})
        .then(res.redirect("/transactionList"))
        .catch((error)=>res.send(`Ha ocurrido un error ${error}`));

};

transactionController.buyCar = async (req,res) => {

    const singleCar = await getSingleCar({_id:req.params.id});

    const benefit = (singleCar.sellingPrice-singleCar.costPrice);
    const newStock = singleCar.stock-1;

    const newTransaction = createTransaction({userId:"1", carId:req.params.id, total:singleCar.sellingPrice, benefit:benefit});

    if(singleCar.stock>0){
        await newTransaction.save();
        await updateCar({_id:req.params.id},{stock:newStock});

    }
    if(newStock==0){
        await updateCar({_id:req.params.id},{availability:"no disponible"});

    }


    res.redirect("/");


}
module.exports = transactionController;