function seats(input) {
    let n = Number(input.shift());
    let windowSeats = 0;
    let middleSeats = 0;
    let aisleSeats = 0;
    for(let i = 0; i < n; i++){
        let seatNumber = input.shift();
       if(seatNumber[1] == 'A' || seatNumber[1] == 'F'){
           windowSeats++;
       } else if (seatNumber[1] == 'B' || seatNumber[1] == 'E') {
           middleSeats++;
       } else if (seatNumber[1] == 'C' || seatNumber[1] == 'D') {
           aisleSeats++;
       }
    }
    console.log(`Window Seats: ${(windowSeats/n*100).toFixed(2)}%`);
    console.log(`Middle Seats: ${(middleSeats/n*100).toFixed(2)}%`);
    console.log(`Aisle Seats: ${(aisleSeats/n*100).toFixed(2)}%`);
}

seats([
    '5',  '1A', '6B',
    '9F', '3D', '2C',
    ''
  ]
  )