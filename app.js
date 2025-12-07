
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
const fromDollarToYen = function fromDollarToYen(dolar){
    let valueInYen = dolar * 146.29;
    return valueInYen;
};
const fromYenToPound = function fromYenToPound(Yen){
    let valueInPound = Yen * 0.00556;
    return valueInPound;
};
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }