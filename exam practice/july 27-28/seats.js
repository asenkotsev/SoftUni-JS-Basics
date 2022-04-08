function seats(input) {
    let n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        let ticket = input.shift();
        if (ticket.length == 4) {
            if (ticket.charCodeAt(0) >= 65 && ticket.charCodeAt(0) <= 90) {
                console.log(`Seat decoded: ${ticket[0]}${ticket[1]}${ticket[2]}`)
            } else {
                console.log(`Seat decoded: ${ticket[3]}${ticket[1]}${ticket[2]}`)
            }
        } else if (ticket.length == 5 || (ticket.length == 6)) {
            console.log(`Seat decoded: ${ticket[0]}${ticket.charCodeAt(1)}`)
        }
    }
}

seats([3, '042W', 'W981', 'W24578'])