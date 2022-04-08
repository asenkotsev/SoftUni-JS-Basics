function fishingBoat(input) {
    let budget = Number(input.shift());
    let season = input.shift();
    let fishermen = Number(input.shift());
    let boatRent;

switch(season) {
    case 'Spring' : 
        boatRent = 3000;
        break;
    case 'Summer' :
    case 'Autumn' :
        boatRent = 4200;
        break;
    case 'Winter' :
        boatRent = 2600;
        break;
}

if(fishermen <= 6) {
    boatRent = boatRent*0.90;
} else if (fishermen >=7 && fishermen <=11) {
    boatRent =boatRent*0.85;
} else if (fishermen > 12) {
    boatRent = boatRent*0.75
}

if((fishermen % 2 == 0) && season !== 'Autumn' ) {
    boatRent = boatRent * 0.95
}

let money = Math.abs(boatRent - budget);
if (budget >= boatRent) {
   console.log(`Yes! You have ${money.toFixed(2)} leva left.`) 
} else {
    console.log(`Not enough money! You need ${money.toFixed(2)} leva.`)
}
}

fishingBoat(['2000','Winter','13'])