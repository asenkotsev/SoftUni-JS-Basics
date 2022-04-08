function sum(input) {
    let startIndex = Number(input[0]);
    let endIndex = Number(input[1]);
    let magicNumber = Number(input[2])
    let counter = 0;
    let isFound = false;

    for (let i = startIndex; i <= endIndex; i++) {
        for (let b = startIndex; b <= endIndex; b++) {
            counter++;
            if (i + b === magicNumber) {
                isFound = true;
                if (isFound) {
                    console.log(`Combination N:${counter} (${i} + ${b} = ${magicNumber})`);
                }
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }
}


sum(['23', '24', '20'])