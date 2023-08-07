// importar la función sum del archivo app.js
const { sum, fromEuroToPound } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One euro should be 127.9 yen", function(){
    // importo la funcion desde app.js
    const { fromEuroToYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToYen(4)).toBe(511.6); //1 euro son 127.9 dolares, entonces 4 euros deberian ser = (4 * 127.9)
})

test("One euro should be 0.8 pounds", function(){
    // importo la funcion desde app.js
    const { fromEuroToPound } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToPound(4)).toBe(3.2); //1 euro son 0.8 libras, entonces 4 euros deberian ser = (4 * 0.8)
})

test("One dollar should be 106.58 yen", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(4)).toBe(426.32); //1 dolar son 106.58 yen, entonces 4 euros deberian ser = (4 * 106.58)
})

test("One yen should be 0.00367 pound", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(10)).toBe(0.0367); //1 yen son 0.00367 libras, entonces 10 euros deberian ser = (10 *0.00367)
})
