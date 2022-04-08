function fuelTank(input) {
    let fuelType = input.shift();
    let leftFuel = Number(input.shift());

switch(fuelType) {
    case 'Diesel' :
    case 'Gasoline' :
    case 'Gas' :
    if(leftFuel >= 25) {
        console.log(`You have enough ${fuelType.toLowerCase()}.`);
    } else {
        console.log(`Fill your tank with ${fuelType.toLowerCase()}!`);
    }
    break;
    default : 
    console.log('Invalid fuel!')
    break;
}
}


fuelTank(['Diesel',10])

