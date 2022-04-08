function club(input) {
    let neededMoney = Number(input.shift());
    let profit = 0;
    let command = input.shift();

    while (command != 'Party!') {
        let cocktail = command;
        let amount = Number(input.shift());
        if (neededMoney <= profit) {
            break;
        }
        if (cocktail.length * amount % 2 == 0) {
            profit += cocktail.length * amount;
        } else {
            profit += cocktail.length * amount * 0.75;
        }
        command = input.shift();
    }
    if (neededMoney <= profit) {
        console.log('Target acquired.');
        console.log(`Club income - ${profit.toFixed(2)} leva.`);
    } else {
        let diff = Math.abs(neededMoney - profit);
        console.log(`We need ${diff.toFixed(2)} leva more.`);
        console.log(`Club income - ${profit.toFixed(2)} leva.`);
    }
}

club([100, 'Sidecar', 7, 'Mojito', 5, 'White Russian', 10])