function newHouse(input) {
    let flowerType = input.shift();
    let flowerAmount = Number(input.shift());
    let budget = Number(input.shift());
    let price = 0;

switch(flowerType) {
    case 'Roses' :
        price = flowerAmount * 5;
        if (flowerAmount > 80) {
            price = price * 0.90;
        }break;
    case 'Dahlias' :
        price = flowerAmount * 3.80;
        if (flowerAmount > 90) {
            price = price * 0.85;
        }break;
    case 'Tulips' :
        price = flowerAmount * 2.80;
        if (flowerAmount > 80) {
            price = price * 0.85;
        }break;
    case 'Narcissus' :
        price = flowerAmount * 3;
        if (flowerAmount < 120) {
            price = price * 1.15;
        }break;
    case 'Gladiolus' :
        price = flowerAmount * 2.50;
        if(flowerAmount < 80) {
            price = price * 1.20
        } break;
} 
let money = Math.abs(budget - price);
if (price <= budget) {
    console.log(`Hey, you have a great garden with ${flowerAmount} ${flowerType} and ${money.toFixed(2)} leva left.`);
} else {
    console.log(`Not enough money, you need ${money.toFixed(2)} leva more.`)
}
}

newHouse(['Gladiolus','64','160'])