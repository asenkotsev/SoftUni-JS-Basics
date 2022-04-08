function leftAndRightSum(input) {
    let numberCount = Number(input.shift())
    let leftSum = 0;
    let rightSum = 0;
    
for(let i = 0; i < numberCount; i++) {
        leftSum += Number(input.shift());
}

for (let i = 0; i < numberCount; i++) {
    rightSum += Number(input.shift());
}

if (leftSum === rightSum) {
    console.log(`Yes, sum = ${leftSum}`);
} else {
    let diff = Math.abs(leftSum - rightSum);
    console.log(`No, diff = ${diff}`)
}
}

leftAndRightSum([ '2', '10', '90', '60', '40' ])