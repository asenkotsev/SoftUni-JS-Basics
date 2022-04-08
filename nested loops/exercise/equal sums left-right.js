function equalSums(input) {
    let firstNum = Number(input.shift());
    let output = '';
    for (let secondNum = Number(input.shift()); firstNum <= secondNum; firstNum++) {
        firstNum = firstNum.toString();
        if ((Number(firstNum[0]) + Number(firstNum[1]) == (Number(firstNum[3]) + Number(firstNum[4])))) {
            output += ` ${firstNum}`;
        } else if ((Number(firstNum[0]) + Number(firstNum[1]) + Number(firstNum[2]) == (Number(firstNum[3]) + Number(firstNum[4])))) {
            output += ` ${firstNum}`;
        } else if ((Number(firstNum[0]) + Number(firstNum[1]) == Number(firstNum[2]) + (Number(firstNum[3]) + Number(firstNum[4])))) {
            output += ` ${firstNum}`;
        }
    }
    console.log(output);
}

equalSums([10000, 10100])
