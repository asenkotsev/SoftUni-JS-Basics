function divide(input) {
    let n = Number(input.shift());
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let counterP1 = 0;
    let counterP2 = 0;
    let counterP3 = 0;

for(let i = 0; i < n; i++) {
    let num = input[i];
    if(num % 2 === 0) {
        counterP1++;
    }
    if(num % 3 === 0) {
        counterP2++;
    }
    if(num % 4 === 0) {
        counterP3++;
    }
}
p1 = counterP1 / n * 100;
p2 = counterP2 / n * 100;
p3 = counterP3 / n * 100;
console.log(`${p1.toFixed(2)}%`);
console.log(`${p2.toFixed(2)}%`);
console.log(`${p3.toFixed(2)}%`);
}

divide([10,680,2,600,200,800,799,199,46,128,65])