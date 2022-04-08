function fuelTank(input) {
    let fuelType = input.shift();
    let fuelAmount = Number(input.shift());
    let clubCard = input.shift();
    let price;

switch(fuelType) {
    case 'Gas' :
        price = 0.93 * fuelAmount;
    break;
    case 'Gasoline' :
        price = 2.22 * fuelAmount;
        break;
    case 'Diesel' : 
        price = 2.33 * fuelAmount;
        break;
} 

if (clubCard === 'Yes') {
    if(fuelType === 'Gasoline') {
        price = 2.04 * fuelAmount;
    } else if (fuelType === 'Diesel') {
        price = 2.21 * fuelAmount;
    } else {
        price = 0.85 * fuelAmount;
    }
}

if(fuelAmount > 20 && fuelAmount <= 25) {
    price = price * 0.92;
} else if (fuelAmount > 25) {
    price = price * 0.90;
}
console.log(`${price.toFixed(2)} lv.`);
}

fuelTank(['Diesel',19,'No'])