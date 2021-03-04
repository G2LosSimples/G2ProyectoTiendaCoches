const mongoose = require('mongoose');
const {createTransaction,getTransactions, getSingleTransaction}=require('../controllers/carSale/transactionFunctions');
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


            describe ('Transaction Model Read', () => {

                it('should return the correct number of transaction succesfully', async () => {
        
                const transactionData = {userId: '1', carId: 'asrgkñbjasd', total: 234, benefit: 123}
                let validTransaction = createTransaction(transactionData);
                validTransaction = await validTransaction.save();
                const transactionList = await getTransactions();
        
                expect(transactionList).toHaveLength(1);
        
        
                })

                it('should return the transaction you are looking for', async () => {

                const transactionData = {userId: '1', carId: 'asrgkñbjasd', total: 234, benefit: 123}
                let validTransaction = createTransaction(transactionData);
                validTransaction = await validTransaction.save();
                const singleTransaction = await getSingleTransaction({_id:validTransaction._id});
                
                expect(singleTransaction._id).toStrictEqual(validTransaction._id);
                expect(singleTransaction.userId).toBe(validTransaction.userId);
                expect(singleTransaction.carId).toBe(validTransaction.carId);
                expect(singleTransaction.total).toBe(validTransaction.total);
                expect(singleTransaction.benefit).toBe(validTransaction.benefit);
                expect(singleTransaction.transactionDate).toStrictEqual(validTransaction.transactionDate);



                })
        
            })




            
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

    it('should insert a transaction succesfully but with a field not defined in model', async () =>{

        const transactionData = {userId: "ASAD", carId:"asdas", total: 1234, benefit:1234, transactionDate:new Date("2021-02-21T00:00:00.000+00:00"), hola: "asdasfa"}
   
        const validTransaction = createTransaction(transactionData);

        await validTransaction.save();

        expect(validTransaction._id).toBeDefined();
        expect(validTransaction.hola).toBeUndefined();


    })

    it('should throw an error without a required field', async () => {

        const transactionData = {userId:'asd'}
        let err;
        try{
            
            const invalidTransaction = await createTransaction(transactionData);
            error = invalidTransaction
            
            await invalidTransaction.save();
            
        }catch(error){ err = error }

        expect(err.errors.carId).toBeDefined();        
        expect(err).toBeInstanceOf(mongoose.Error.ValidationError);

    })

    

    afterAll(done => {
        mongoose.connection.close()
        done();
    })

    

})


