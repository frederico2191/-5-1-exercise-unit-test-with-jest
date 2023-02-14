const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    //return the dollar value
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar){
    let valueInYen = Math.floor(valueInDollar / oneEuroIs.USD * oneEuroIs.JPY);
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    // convert the given valueInEuro to dollars
    let valueInPound1 = (valueInYen / oneEuroIs.JPY * oneEuroIs.GBP);
    let valueInPound = valueInPound1.toFixed(6)
    //return the dollar value
    return valueInPound;
}

module.exports = { sum,fromEuroToDollar,fromDollarToYen,fromYenToPound };