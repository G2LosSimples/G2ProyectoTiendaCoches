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
        expect(validCar.leaseReturnDate).toBe(carData.leaseReturnDate);
        expect(validCar.carImage).toBe(carData.carImage);
        expect(validCar.carColor).toBe(carData.carColor);
        expect(validCar.seatsNumber).toBe(carData.seatsNumber);
        expect(validCar.doorNumber).toBe(carData.doorNumber);
        expect(validCar.trunkSize).toBe(carData.trunkSize);
        expect(validCar.co2Emissions).toBe(carData.co2Emissions);
        expect(validCar.carType).toBe(carData.carType);
        expect(validCar.airConditioner).toBe(carData.airConditioner);
        expect(validCar.transmissionType).toBe(carData.transmissionType);
        expect(validCar.motorType).toBe(carData.motorType);
        expect(validCar.stock).toBe(carData.stock);
        expect(validCar.availability).toBe(carData.availability);
        expect(validCar.transactionType).toBe(carData.transactionType);
    })

    it('should insert a car succesfully but with a field not defined in model', async () => {

        const carData = {carBrand:'ford', carModel:'mondeo', modelYear:'1999', nextItvDate:new Date("2021-02-21T00:00:00.000+00:00"), sellingPrice:2000, costPrice:500, leasingPrice:300, leaseDate:new Date("2021-02-21T00:00:00.000+00:00"), leaseReturnDate:new Date("2021-02-21T00:00:00.000+00:00"), carImage:'adsdas', carColor:'plateado', seatsNumber:5, doorNumber:5, trunkSize:50, co2Emissions:'asdassd', carType:'asdas', airConditioner:'NO', transmissionType:'auto', motorType:'gasolina', stock:2, availability:'SI', transactionType:'asssd', lolailo: 'lolailo' }

        const validCar = await createCar(carData);

        expect(validCar._id).toBeDefined();
        expect(validCar.lolailo).toBeUndefined();
        

    })

    it('should throw an error without a required field', async () => {

        const carData = {carBrand:'ford'}
        let err;
        try{

            const invalidCar = await createCar(carData);
            error = invalidCar

        }catch(error){ err = error }

        expect(err.errors.carModel).toBeDefined();
        expect(err).toBeInstanceOf(mongoose.Error.ValidationError);

    }) 

    afterAll(done => {
        mongoose.connection.close()
        done();
    })


})