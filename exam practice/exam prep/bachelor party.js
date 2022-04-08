function party(input) {
    let neededMoney = Number(input.shift());
    let command = input.shift();
    let guestsTotal = 0;
    let profit = 0
    while (command !== 'The restaurant is full') {
        let guests = Number(command);
        guestsTotal += guests;
        if (guests < 5) {
            profit += guests * 100;
        } else if (guests >= 5) {
            profit += guests * 70;
        }
        command = input.shift();
    }
    if (neededMoney <= profit) {
        let diff = Math.abs(neededMoney - profit);
        console.log(`You have ${guestsTotal} guests and ${diff} leva left.`);
    } else {
        console.log(`You have ${guestsTotal} guests and ${profit} leva income, but no singer.`)
    }
}

party(['2800', '5', '5', '4', '6', '6', '12', '12', 'The restaurant is full'])