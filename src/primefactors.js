function primefactors(numberToFactorize) {
    if(numberToFactorize === 0) {
        throw 'No prime factors';
    }

    var factors = [];

    var currentDivisor = 2;

    while (numberToFactorize > 1) {
        while(numberToFactorize % currentDivisor === 0) {
            factors.push(currentDivisor);
            numberToFactorize = Math.floor(numberToFactorize / currentDivisor);
        }

        currentDivisor ++;
    }

    return factors;
}

export default primefactors;
