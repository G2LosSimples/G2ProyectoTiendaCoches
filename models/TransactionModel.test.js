const mongoose = require('mongoose');
const {createTransaction}=require('../controllers/carSale/transactionFunctions');

describe('Transaction model',()=>{


    beforeAll(async () => {
        await mongoose.connect("mongodb://localhost/Chuletica",
            { useNewUrlParser: true, useCreateIndex: true }, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
    });

    it('should create a Transaction succesfully', async ()=> {
        const transactionData = {userId: '1', carId: 'asrgkñbjasd', total: 234, benefit: 123}
        const validTransaction = createTransaction(transactionData);
        await validTransaction.save();
        expect(validTransaction._id).toBeDefined();
        expect(validTransaction.userId).toBe(transactionData.userId);
        expect(validTransaction.carId).toBe(transactionData.carId);
        expect(validTransaction.total).toBe(transactionData.total);
        expect(validTransaction.benefit).toBe(transactionData.benefit);
    })




})
