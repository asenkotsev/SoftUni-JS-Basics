function reservation(input) {
    let dayOfReservation = Number(input.shift());
    let monthOfReservation = Number(input.shift());
    let dayOfAccommodation = Number(input.shift());
    let monthOfAccommodation = Number(input.shift());
    let dayOfLeaving = Number(input.shift());
    let monthOfLeaving = Number(input.shift());
    let roomPrice = 30;

    if (Math.abs(dayOfReservation - dayOfAccommodation) >= 10) {
        roomPrice = 25;
    }

    if (Math.abs(monthOfReservation - monthOfAccommodation) >= 1) {
        roomPrice = 25 * 0.80;
    }
    
    console.log(`Your stay from ${dayOfAccommodation}/${monthOfAccommodation} to ${dayOfLeaving}/${monthOfLeaving} will cost ${(roomPrice * (dayOfLeaving - dayOfAccommodation)).toFixed(2)}`)
}

reservation([1, 7, 30, 8, 31, 8])