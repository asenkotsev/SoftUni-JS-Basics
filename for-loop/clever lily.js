function cleverLily(input) {
    let n = Number(input.shift());
    let laundryPrice = Number(input.shift());
    let toyPrice = Number(input.shift());
    let savedMoney = 0;
    let toyAmount = 0;
    let counter = -1;

    for (i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            savedMoney += 10 * (i/2);
            counter++;
        } else {
            toyAmount++;
        }
    }
    let totalMoney = savedMoney + toyAmount * toyPrice - counter;
    let diff = Math.abs(totalMoney - laundryPrice);
    if(totalMoney >= laundryPrice) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }
}

cleverLily([ '10', '170.00', '6' ])