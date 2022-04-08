function golf(input) {
let record = Number(input.shift());
let holeAmount = Number(input.shift());
let powerNum = 0;
let powerLength = 0;
let hits = 0;
for(let i = 0; i < holeAmount; i++){
    let powerNeeded = Number(input.shift());
    for(let j = 0; j <= record; j++){
        powerNum = 0;
        if(powerNeeded <= 0) {
            console.log(`New hole reached! Hits so far: ${hits}`);
            break;
        }
        let power = input.shift();
        for(let l = 0; l < power.length; l++) {
            powerNum += power.charCodeAt(l);
            powerLength = power.length;
        }
        powerNeeded -= powerNum/powerLength;
        hits++;
    }
}
if(record > hits) {
    console.log(`Yes, you won! Total hits: ${hits}`);
} else {
    console.log(`Better luck next time... Total hits: ${hits}`);
}
}

golf([
    '3',
    '2',
    '150',
    'WEAK HIT',
    'ANOTHER WEAK HIT',
    'NoTtHaTwEaKhIt',
    '60',
    'WOW THATS THE LAST HOLE?'
  ]
  
  )