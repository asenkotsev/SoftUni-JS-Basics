function decoration(input) {
    let budget = Number(input.shift());
    let command = input.shift();
    while (command !== 'Stop') {
        let name = command;
        let price = 0;
        for (let i = 0; i < name.length; i++) {
            price += name.charCodeAt(i);
        }
        if (budget >= price) {
            budget -= price;
            console.log('Item successfully purchased!');
        } else {
            console.log('Not enough money!');
            break;
        }
        command = input.shift();
    }
    if (budget >= 0 && command == 'Stop') {
        console.log(`Money left: ${budget}`);
    }
}


decoration(['442', 'star', 'Stop'])