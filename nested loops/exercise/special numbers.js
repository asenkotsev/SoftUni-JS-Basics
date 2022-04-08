function specialNums(input) {
    let n = Number(input.shift());
    let output = '';
    for (let firstDigit = 1; firstDigit <= 9; firstDigit++) {
        for (let secondDigit = 1; secondDigit <= 9; secondDigit++) {
            for (let thirdDigit = 1; thirdDigit <= 9; thirdDigit++) {
                for (let fourthDigit = 1; fourthDigit <= 9; fourthDigit++) {
                    let firstIsCorrect = n % firstDigit === 0;
                    let secondIsCorrect = n % secondDigit === 0;
                    let thirdIsCorrect = n % thirdDigit === 0;
                    let fourthIsCorrect = n % fourthDigit === 0;
                    if (firstIsCorrect && secondIsCorrect && thirdIsCorrect && fourthIsCorrect) {
                        output += (`${firstDigit}${secondDigit}${thirdDigit}${fourthDigit} `)
                    }

                }
            }
        }
    }
    console.log(output)
}

specialNums(['3'])