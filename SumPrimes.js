const sumPrimes = (maxPrime) => {
    
    const higherNumber = maxPrime;
    var resultArray = [];

    for (let i = 0; i <= higherNumber; i++) {
        let flag = 0;

        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }

        if (i > 1 && flag == 0) {
            resultArray.push(i);
        }
    }
    return resultArray.reduce( (acum,value) => acum+value);
}

console.log(sumPrimes(10))
console.log(sumPrimes(10))
console.log(sumPrimes(977))