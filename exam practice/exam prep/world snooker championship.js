function snookerChampionship(input) {
    let championshipType = input.shift();
    let ticketType = input.shift();
    let ticketAmount = Number(input.shift());
    let photoWithTrophy = input.shift();
    let price = 0;
    switch (championshipType) {
        case 'Quarter final':
            if (ticketType == 'Standard') {
                price = 55.5 * ticketAmount;
            } else if (ticketType == 'Premium') {
                price = 105.2 * ticketAmount;
            } else if (ticketType == 'VIP') {
                price = 118.9 * ticketAmount;
            }
            break;
        case 'Semi final':
            if (ticketType == 'Standard') {
                price = 75.88 * ticketAmount;
            } else if (ticketType == 'Premium') {
                price = 125.22 * ticketAmount;
            } else if (ticketType == 'VIP') {
                price = 300.4 * ticketAmount;
            }
            break;
        case 'Final':
            if (ticketType == 'Standard') {
                price = 110.1 * ticketAmount;
            } else if (ticketType == 'Premium') {
                price = 160.66 * ticketAmount;
            } else if (ticketType == 'VIP') {
                price = 400 * ticketAmount;
            }
            break;
    }
    if (price > 4000) {
        price *= 0.75;
    } else if (price > 2500) {
        if (photoWithTrophy == 'Y') {
            price *= 0.9;
            price += ticketAmount * 40;
        } else {
            price *= 0.9;
        }
    } else {
        if (photoWithTrophy == 'Y') {
            price += ticketAmount * 40;
        }
    }
    console.log(price.toFixed(2));
}

snookerChampionship(['Semi final', 'VIP', 9, 'Y'])