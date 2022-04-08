function bus(input) {
    let travellers = Number(input.shift());
    let stops = Number(input.shift());
    let stopCounter = 0;
    for(let i = 0; i < stops*2; i++) {
        let diff = Number(input.shift())
        if(i % 2 == 0) {
            travellers -= diff;
            if(stopCounter % 2 == 0) {
                travellers += 2;
            } else {
                travellers -= 2;
            }
        } else {
            travellers += diff;
            stopCounter++;
        }
    }
    console.log(`The final number of passengers is : ${travellers}`)
}

bus([25,
    5,
    14,
    15,
    9,
    11,
    10,
    13,
    6,
    7,
    10,
    8
    ])