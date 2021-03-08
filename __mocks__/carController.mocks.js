import 'jest';

let newCarCreation = jest.fn().mockReturnValue({carBrand: "Tesla", carModel: "Mz3", modelYear: "2021", carImage: "sdfksjhdfskjdfh", carColor: "Blanco", seatsNumber: 5, doorNumber: 5, transmissionType: "automatico", motorType: "noseloqueeee"});
let carDelete =  jest.fn().mockReturnValue(null);


const carController = jest.mock('../controllers/carSale/carController.js', () => {
    return {
      newCarCreation,
      carDelete
    };
});






export default carController;