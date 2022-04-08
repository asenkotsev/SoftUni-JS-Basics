function bikeRace(input) {
    let juniorCyclists = Number(input.shift());
    let seniorCyclists = Number(input.shift());
    let roadType = input.shift();
    let price;

switch(roadType) {
    case 'trail' :
        price = juniorCyclists * 5.50 + seniorCyclists * 7;
        break;
    case 'cross-country' :
        price = juniorCyclists * 8 + seniorCyclists * 9.50;
        break;
    case 'downhill' :
        price = juniorCyclists * 12.25 + seniorCyclists * 13.75;
        break;
    case 'road' :
        price = juniorCyclists * 20 + seniorCyclists * 21.50;
        break;
}
if ((juniorCyclists + seniorCyclists) >= 50 && roadType === 'cross-country') {
    price = (price*0.75)*0.95 ;
} else {
    price = price*0.95;
}
console.log(price.toFixed(2));
}

bikeRace([30,25,'cross-country'])