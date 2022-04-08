function numSequence(input) {
    let numberCount = Number(input.shift());
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < numberCount; i++) {
        let num = Number(input.shift());
        if (num < min) {
            min = num;
        }
        if (num > max) {
            max = num;
        }
    }
console.log(`Max number: ${max}`);
console.log(`Min number: ${min}`);
}

numSequence([ '5', '10', '20', '304', '0', '50' ])