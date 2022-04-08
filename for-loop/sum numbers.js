function numbers(input) {
    let numberCount = Number(input.shift());
    let sum = 0;
    for(i=0; i < numberCount; i++) {
        let num = Number(input.shift());
        sum += num;
    }
console.log(sum)
}

numbers([ '2', '10', '20' ])