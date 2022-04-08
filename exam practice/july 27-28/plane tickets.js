function planeTickets(input) {
    let ticket = input.shift();
    let min = Number.MAX_SAFE_INTEGER;
    let lastTicket = '';
    let lastPrice = 0;

    while (ticket !== 'End') {
        let price = Number(input.shift());
        let stay = Number(input.shift());
        if (stay < min) {
            min = stay;
            lastTicket = ticket;
            lastPrice = price * 1.96;
        }
        ticket = input.shift();
    }
    let stayInMin = min % 60;
    let stayInHour = Math.floor(min / 60);
    console.log(`Ticket found for flight ${lastTicket} costs ${lastPrice.toFixed(2)} leva with ${stayInHour}h ${stayInMin}m stay`);
}

planeTickets([
    'W64301', '60',
    '140', 'FR9967',
    '80', '200',
    'FR0066', '45',
    '60', 'End'
])