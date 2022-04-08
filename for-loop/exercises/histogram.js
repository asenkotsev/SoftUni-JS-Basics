function histogram(input) {
    let n = Number(input.shift());
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    let counterP1 = 0;
    let counterP2 = 0;
    let counterP3 = 0;
    let counterP4 = 0;
    let counterP5 = 0;

for(i = 0; i < n; i++) {
   let num = Number(input[i]);
   if(num < 200) {
       counterP1++;
   } else if(num >= 200 && num <= 399) {
       counterP2++;
   } else if(num >= 400 && num <= 599) {
       counterP3++;
   } else if (num >= 600 && num <= 799) {
       counterP4++;
   } else {
       counterP5++;
   }
}
p1 = counterP1 / n * 100;
p2 = counterP2 / n * 100;
p3 = counterP3 / n * 100;
p4 = counterP4 / n * 100;
p5 = counterP5 / n * 100;
console.log(`${p1.toFixed(2)}%`)
console.log(`${p2.toFixed(2)}%`)
console.log(`${p3.toFixed(2)}%`)
console.log(`${p4.toFixed(2)}%`)
console.log(`${p5.toFixed(2)}%`)
}


histogram([3,1,2,999])