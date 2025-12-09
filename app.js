
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
let YenEuro = 1 / oneEuroIs.JPY;
let DolarEuro= 1 / oneEuroIs.USD;
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
const fromDollarToYen = function fromDollarToYen(dolar){
    let valueInYen = dolar * (YenEuro * DolarEuro);
    return valueInYen;
};
const fromYenToPound = function fromYenToPound(Yen){
    let valueInPound = Yen * (YenEuro * oneEuroIs.GBP );
    return valueInPound;
};
console.log(YenEuro);
console.log(DolarEuro);




module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound, DolarEuro, YenEuro, oneEuroIs }