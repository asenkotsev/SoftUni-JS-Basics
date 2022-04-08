function equalSums(input) {
    let firstNum = Number(input.shift());
    let output = '';
    for (let secondNum = Number(input.shift()); firstNum <= secondNum; firstNum++) {
        firstNum = firstNum.toString();
        if ((Number(firstNum[0]) + Number(firstNum[2]) + Number(firstNum[4])) == (Number(firstNum[1]) + Number(firstNum[3]) + Number(firstNum[5]))) {
            output += ` ${firstNum}`;
        }
    }
    console.log(output);
}

equalSums(['100000', '100050'])