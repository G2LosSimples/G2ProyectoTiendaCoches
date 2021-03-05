import 'jest';
import  carController from '../../__mocks__/carController.mocks';


describe ('Tests set to mock carController funcitons', ()=>{ 
 

 
    describe ('function create new Car', ()=>{ 
 
        it('should return the new car created', () => { 
 
            expect(carController.newCarCreation).toEqual({carBrand: "Tesla", carModel: "Mz3", modelYear: "2021", carImage: "sdfksjhdfskjdfh", carColor: "Blanco", seatsNumber: 5, doorNumber: 5, transmissionType: "automatico", motorType: "noseloqueeee"});
        
 
        });
    });
});
