function bags(input) {
    let price20kg = Number(input.shift());
    let bagsKg = Number(input.shift());
    let daysRemaining = Number(input.shift());
    let bagsAmount = Number(input.shift());
    let price = 0;

    if (bagsKg < 10) {
        price = price20kg * 0.2 * bagsAmount;
    } else if (bagsKg >= 10 && bagsKg <= 20) {
        price = price20kg * 0.5 * bagsAmount;
    } else {
        price = price20kg * bagsAmount;
    }

    if (daysRemaining > 30) {
        price *= 1.10;
    } else if (daysRemaining >= 7 && daysRemaining <= 30) {
        price *= 1.15;
    } else {
        price *= 1.40;
    }

    console.log(`The total price of bags is: ${price.toFixed(2)} lv.`);
}

bags(['25.50', '10', '36', '6', ''])