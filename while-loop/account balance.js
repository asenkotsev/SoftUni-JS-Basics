function balance(input) {
    let num = Number(input.shift());
    let counter = 0;
    let balance = 0.0;

let amount = Number(input.shift());
while (num > counter) {
    if (amount < 0) {
        console.log('Invalid operation!');
        break;
    }
    console.log(`Increase: ${amount.toFixed(2)}`);
    balance += amount;
    amount = Number(input.shift());
    counter++;
}
console.log(`Total: ${balance.toFixed(2)}`)
}

balance([
3,
5.51,
69.42,
100
])