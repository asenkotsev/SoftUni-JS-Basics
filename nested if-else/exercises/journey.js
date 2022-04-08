function journey(input) {
    let budget = Number(input.shift());
    let season = input.shift();
    let destination;
    let type;
    let cost;

if (budget <= 100) {
    destination = 'Bulgaria';
    if (season === 'summer' ) {
        cost = budget*0.30;
        type = 'Camp';
    } else if (season === 'winter') {
        cost = budget*0.70;
        type = 'Hotel';
    }
} else if (budget <= 1000) {
    destination = 'Balkans';
    if (season === 'summer') {
        cost = budget*0.40;
        type = 'Camp';
    } else if (season === 'winter') {
        cost = budget*0.80;
        type = 'Hotel';
    }
} else if (budget > 1000 ) {
    destination = "Europe"
    cost = budget*0.90;
    type = 'Hotel';
}
console.log(`Somewhere in ${destination}`);
console.log(`${type} - ${cost.toFixed(2)}`);
}

journey(['75','winter'])