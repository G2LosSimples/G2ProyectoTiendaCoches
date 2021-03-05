import 'jest';

let newCarCreation = jest.fn().mockReturnValue({carBrand: "Ford", carModel: "2zM", modelYear: "2002", carImage: "hola", carColor: "Negro", seatsNumber: 2, doorNumber: 2, transmissionType: "manual", motorType: "bola"});

const carController = jest.mock('../controllers/carSale/carController.js', () => {
    return {
      newCarCreation
    };
});

export default carController;