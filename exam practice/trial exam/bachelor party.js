function party(input) {
    let neededMoney = Number(input.shift());
    let profit = 0;
    let guestCounter = 0;
    let command = input.shift();

    while (command !== 'The restaurant is full') {
        let guests = Number(command);
        if (guests < 5) {
            guestCounter += guests;
            profit += guests * 100;
        } else if (guests >= 5) {
            guestCounter += guests;
            profit += guests * 70;
        }
        command = input.shift();
    }
    let diff = Math.abs(neededMoney - profit);
    if (profit >= neededMoney) {
        console.log(`You have ${guestCounter} guests and ${diff} leva left.`);
    } else {
        console.log(`You have ${guestCounter} guests and ${profit} leva income, but no singer.`);
    }
}

party(['2800', '5', '5', '4', '6', '6', '12', '12', 'The restaurant is full'])
