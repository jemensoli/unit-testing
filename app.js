// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromEuroToYen = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 127.9;
    // retornamos el valor
    return valueInDollar;
}

const fromEuroToPound = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 0.8;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a yen
    let valueInYen = valueInDollar * 106.58;
    // retornamos el valor
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    // convertimos el valor a libras
    let valueInPound = valueInYen * 0.00367;
    // retornamos el valor
    return valueInPound;
}

console.log("Hello World")

// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
// tenemos que incluir la funcion en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar, fromEuroToYen, fromEuroToPound, fromDollarToYen, fromYenToPound }