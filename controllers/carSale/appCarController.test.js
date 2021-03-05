import 'jest';

import  carController from '../../__mocks__/carController.mocks';

import * as appCarController from './appCarController';


 describe ('function create new Car', ()=>{ 
 
    it('should return the new car created', () => { 
 
        expect(appCarController.doCreateCar()).toEqual({carBrand: "Tesla", carModel: "Mz3", modelYear: "2021", carImage: "sdfksjhdfskjdfh", carColor: "Blanco", seatsNumber: 5, doorNumber: 5, transmissionType: "automatico", motorType: "noseloqueeee"});
    });
});

