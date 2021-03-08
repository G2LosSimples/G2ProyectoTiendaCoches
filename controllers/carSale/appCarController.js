import * as carController from './carController';

const doCreateCar = () => {
    let nuevoCoche = {carBrand: "Tesla", carModel: "Mz3", modelYear: "2021", carImage: "sdfksjhdfskjdfh", carColor: "Blanco", seatsNumber: 5, doorNumber: 5, transmissionType: "automatico", motorType: "noseloqueeee"}

    return carController.newCarCreation(nuevoCoche);
};

const doCarDelete = () => {
    return carController.carDelete(null);
}

export {
    doCreateCar,
    doCarDelete
};