function division(input) {
    let n = Number(input.shift());
    let percent2 = 0;
    let percent3 = 0;
    let percent4 = 0;
    for (let i = 0; i < n; i++) {
        let num = Number(input.shift());
        if (num % 2 === 0) {
            percent2++;
        } if (num % 3 === 0) {
            percent3++;
        } if (num % 4 === 0) {
            percent4++;
        }
    }
    console.log(`${(percent2 / n * 100).toFixed(2)}%`);
    console.log(`${(percent3 / n * 100).toFixed(2)}%`);
    console.log(`${(percent4 / n * 100).toFixed(2)}%`);
}


division([3, 3, 6, 9])