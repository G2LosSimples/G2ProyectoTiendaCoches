const mongoose = require('mongoose');
const {createCar} = require('../controllers/carSale/carFunctions')
const path = require('../globalConfig.json')

describe ('Car Model', ()=>{

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
    })

    it('should create a Car succesfully', async () => {

        const carData = {carBrand:'ford', carModel:'mondeo', modelYear:'1999', nextItvDate:new Date("2021-02-21T00:00:00.000+00:00"), sellingPrice:2000, costPrice:500, leasingPrice:300, leaseDate:new Date("2021-02-21T00:00:00.000+00:00"), leaseReturnDate:new Date("2021-02-21T00:00:00.000+00:00"), carImage:'adsdas', carColor:'plateado', seatsNumber:5, doorNumber:5, trunkSize:50, co2Emissions:'asdassd', carType:'asdas', airConditioner:'NO', transmissionType:'auto', motorType:'gasolina', stock:2, availability:'SI', transactionType:'asssd' }
        
        const validCar = await createCar(carData);

        expect(validCar._id).toBeDefined();
        expect(validCar.carBrand).toBe(carData.carBrand);
        expect(validCar.carModel).toBe(carData.carModel);
        expect(validCar.modelYear).toBe(carData.modelYear);
        expect(validCar.nextItvDate).toBe(carData.nextItvDate);
        expect(validCar.sellingPrice).toBe(carData.sellingPrice);
        expect(validCar.costPrice).toBe(carData.costPrice);
        expect(validCar.leasingPrice).toBe(carData.leasingPrice);
        expect(validCar.leaseDate).toBe(carData.leaseDate);
        // expect(validCar.carBrand).toBe(carData.carBrand);
        // expect(validCar.carBrand).toBe(carData.carBrand);
    })

    afterAll(done => {
        mongoose.connection.close()
        done();
    })


})