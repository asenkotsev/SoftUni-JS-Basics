function equalPairs(input) {
    let n = Number(input[0]);
    let sumFirstNum = 0;
    let sumSecondNum = 0;
    let counter = 0;
    let isEqual = true;

    for (let i = 1; i <= n * 2; i += 2) {
        let numA = Number(input[i]);
        let numB = Number(input[i + 1]);
        if (counter % 2 == 0) {
            sumFirstNum = numA + numB;
        } else {
            sumSecondNum = numA + numB;
            if (sumFirstNum !== sumSecondNum) {
                isEqual = false;
            }
        }
        counter++;
    }
    if (isEqual) {
        console.log(`Yes, value=${sumFirstNum}`)
    } else {
        console.log(`No, maxdiff=${Math.abs(sumFirstNum - sumSecondNum)}`)
    }
}

equalPairs([1, 5, 5])