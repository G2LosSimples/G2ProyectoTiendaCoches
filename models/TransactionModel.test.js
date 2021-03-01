const mongoose = require('mongoose');
const {createTransaction}=require('../controllers/carSale/transactionFunctions');
const path = require('../globalConfig.json')

describe('Transaction model',()=>{


    beforeAll(async () => {
        await mongoose.connect(path.mongoUri,
            { useUnifiedTopology: true,
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false }, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
    });

    it('should create a Transaction succesfully', async ()=> {
        const transactionData = {userId: '1', carId: 'asrgkñbjasd', total: 234, benefit: 123}
        let validTransaction = createTransaction(transactionData);
        validTransaction = await validTransaction.save();
        expect(validTransaction._id).toBeDefined();
        expect(validTransaction.userId).toBe(transactionData.userId);
        expect(validTransaction.carId).toBe(transactionData.carId);
        expect(validTransaction.total).toBe(transactionData.total);
        expect(validTransaction.benefit).toBe(transactionData.benefit);
    })

    afterAll(done => {
        mongoose.connection.close()
        done();
    })


})
