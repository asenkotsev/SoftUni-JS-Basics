function flight(input) {
    let ticketType = input.shift();
    let distance = Number(input.shift());
    let travellers = Number(input.shift());
    let price = 0;
    if (ticketType == 'Economy') {
        if (distance < 1500) {
            price = 59.99;
        } else if (distance >= 1500 && distance <= 3500) {
            price = 184.99;
        } else {
            price = 269.99;
        }
    } else if (ticketType == 'Premium') {
        if (distance < 1500) {
            price = 179.99;
        } else if (distance >= 1500 && distance <= 3500) {
            price = 279.99;
        } else {
            price = 394.99;
        }
    } else if (ticketType == 'Business') {
        if (distance < 1500) {
            price = 254.99;
        } else if (distance >= 1500 && distance <= 3500) {
            price = 379.99;
        } else {
            price = 619.99;
        }
    }
    if(travellers > 6) {
        price *= 0.8;
    }
    console.log(`The total price of the tickets is: ${(price*travellers).toFixed(2)} lv.`);
}

flight([ 'Premium', '2500', '5' ])