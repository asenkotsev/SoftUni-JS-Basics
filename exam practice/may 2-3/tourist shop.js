function touristShop(input) {
    let budget = Number(input.shift());
    let command = input.shift();
    let cost = 0;
    let i = 1;
    while (command !== 'Stop') {
        let name = command;
        let price = Number(input.shift());
        if (cost > budget) {
            break;
        }
        if (i % 3 === 0) {
            cost += price * 0.5;
        } else {
            cost += price;
        }
        command = input.shift();
        i++;
    }
    if (cost <= budget) {
        console.log(`You bought ${i - 1} products for ${cost.toFixed(2)} leva.`);
    } else {
        let diff = cost - budget;
        console.log("You don't have enough money!");
        console.log(`You need ${diff.toFixed(2)} leva!`);
    }
}

touristShop(['153.20', 'Backpack', '25.20', 'Shoes', '54', 'Sunglasses', '30', 'Stop'])