
test("3.5 Euros should be 3.745 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(expected);
});
test("55 dolar should be 8045,95 yen", function() {
    const { fromDollarToYen } = require('./app.js');
    const yenes = fromDollarToYen(55);
    const expected = 55 * 146.29;
    expect(yenes).toBe(expected);
});
test("67 yen should be 0.3752 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(67);
    const expected = 67 * 0.0056;
    expect(pounds).toBeCloseTo(expected);
});