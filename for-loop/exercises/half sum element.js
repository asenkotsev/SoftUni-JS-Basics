function halfSumElement(input) {
    let n = Number(input.shift());
    let sum = 0;
    let maxNumber = Number.MIN_SAFE_INTEGER;

    for (i = 0; i < n; i++) {
        let num = Number(input.shift());
        if (num > maxNumber) {
            maxNumber = num ;
        }
        sum += num;
    }
    sum -= maxNumber;
    let diff = Math.abs(maxNumber - sum);
    if(diff === 0) {
        console.log('Yes');
        console.log(`Sum = ${sum}`);
    } else {
        console.log('No');
        console.log(`Diff = ${diff}`);
    }
}

halfSumElement([ '4', '6', '1', '2', '3' ])