function primefactors(numberToDecompose) {
    let factors = [];

    let divisor = 2;

    while (divisor <= numberToDecompose) {
        while (numberToDecompose % divisor === 0) {
            factors.push(divisor);
            numberToDecompose = Math.floor(numberToDecompose / divisor);
        }
        divisor++;
    }

    return factors;
}
export default primefactors;