const {getCars,getSingleCar,createCar,deleteCar,updateCar} = require('./carFunctions');

describe('Pruebas de funciones sobre coches',()=>{

    test('Comprobacion del valor de retorno getCars()',()=>{

       expect(getCars()).toBeTruthy();

    })
    test('Comprobacion del valor de retorno getSingleCar()',()=>{

        expect(getSingleCar()).toBeTruthy();

    })
    test('Comprobacion del valor de retorno createCar()',()=>{

        expect(createCar()).toBeTruthy();

    })
    test('Comprobacion del valor de retorno deleteCar()',()=>{

        expect(deleteCar()).toBeTruthy();

    })
    test('Comprobacion del valor de retorno updateCar()',()=>{

        expect(updateCar()).toBeTruthy();

    })

})