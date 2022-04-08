function oddEvenSum(input) {
   let n = Number(input.shift());
   let oddSum = 0;
   let evenSum = 0;
for(i = 0; i < n; i++) {
    let num = Number(input.shift());
    if (i % 2 === 0) {
        evenSum += num;
    } else {
        oddSum += num;
    }
}
if(evenSum === oddSum) {
    console.log('Yes');
    console.log(`Sum = ${oddSum}`);
} else {
    let diff = Math.abs(evenSum - oddSum);
    console.log('No');
    console.log(`Diff = ${diff}`)
}
}

oddEvenSum(['4','10','50','60','20'])