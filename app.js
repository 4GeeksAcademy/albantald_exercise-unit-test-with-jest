


const sum = (a,b) => {
    return a + b
}




const oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
const fromDollarToYen = (dollars) => {
    const euros = dollars / oneEuroIs.USD;
    const yenes = euros * oneEuroIs.JPY;
    return yenes;
}

const fromEuroToDollar = (euros) => {
    return euros * oneEuroIs.USD;
}

const fromYenToPound = (yenes) => {
    const euros = yenes / oneEuroIs.JPY;
    const pounds = euros * oneEuroIs.GBP;
    return pounds;
}



module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };