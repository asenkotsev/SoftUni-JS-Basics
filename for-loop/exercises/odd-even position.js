function oddEvenPosition(input) {
    let n = Number(input[0]);
    let oddSum = 0;
    let evenSum = 0;
    let oddMax = Number.MIN_SAFE_INTEGER;
    let oddMin = Number.MAX_SAFE_INTEGER;
    let evenMin = Number.MAX_SAFE_INTEGER;
    let evenMax = Number.MIN_SAFE_INTEGER;
    for (i = 1; i <= n; i++) {
        let num = Number(input[i]);
        if (i % 2 === 0) {
            if (num < evenMin) {
                evenMin = num;
            }
            if (num > evenMax) {
                evenMax = num;
            }
            evenSum += num;
        } else {
            if (num < oddMin) {
                oddMin = num;
            }
            if (num > oddMax) {
                oddMax = num;
            }
            oddSum += num; 
        }
    }
    console.log(`OddSum=${oddSum.toFixed(2)},`)
    if(oddMin === Number.MAX_SAFE_INTEGER) {
        console.log('OddMin=No,')
    } else {
        console.log(`OddMin=${oddMin.toFixed(2)},`)
    }
    if(oddMax === Number.MIN_SAFE_INTEGER) {
        console.log('OddMax=No,')
    } else {
        console.log(`OddMax=${oddMax.toFixed(2)},`)
    }
    console.log(`EvenSum=${evenSum.toFixed(2)},`)
    if(evenMin === Number.MAX_SAFE_INTEGER) {
        console.log('EvenMin=No,')
    } else {
        console.log(`EvenMin=${evenMin.toFixed(2)},`)
    }
    if(evenMax === Number.MIN_SAFE_INTEGER) {
        console.log('EvenMax=No')
    } else {
        console.log(`EvenMax=${evenMax.toFixed(2)}`)
    }
}

oddEvenPosition([1,1])