const { sum } = require('./app.js');
const { fromEuroToDollar } = require('./app.js');
const { fromDollarToYen } = require('./app.js');
const { fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    const dollars = fromEuroToDollar(3.5)
    const expected = 3.5 * 1.2; 
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})
test("One dollar should be more than 127  Yen", function(){
    const { fromDollarToYen } = require('./app.js')
    const Yen = fromDollarToYen(3.5)
    const expected = 3.5 / 1.2 * 127.9; 
    expect(fromDollarToYen(3.5)).toBe(373);
})
test("One yen should be 0.006 pounds", function(){
    const { fromYenToPound } = require('./app.js')
    const dollars = fromYenToPound(3.5)
    const expected = 3.5 /127.9 * 0.8; 
     expect(fromYenToPound(3.5)).toBe("0.021892"); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

