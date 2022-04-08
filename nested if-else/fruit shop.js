function fruitShop(input) {
    let fruit = input.shift();
    let day = input.shift();
    let amount = Number(input.shift());
    let isError = false;

if(day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday') {
    day = 'workday';
} else if (day === 'Saturday' || day === 'Sunday') {
    day = 'weekend';
} else {
    isError = true;
}

let fruitPrice = Number;

if(day === 'workday') {
if(fruit === 'banana') {
    fruitPrice = 2.50;
} else if (fruit === 'apple') {
    fruitPrice = 1.20;
} else if (fruit === 'orange') {
    fruitPrice = 0.85;
} else if (fruit === 'grapefruit') {
    fruitPrice = 1.45;
} else if (fruit === 'kiwi') {
    fruitPrice = 2.70;
} else if (fruit === 'pineapple') {
    fruitPrice = 5.50;
} else if (fruit === 'grapes') {
    fruitPrice = 3.85; 
} else {
   isError = true;
} 
} else if(day === 'weekend') {
    if(fruit === 'banana') {
        fruitPrice = 2.70;
    } else if (fruit === 'apple') {
        fruitPrice = 1.25;
    } else if (fruit === 'orange') {
        fruitPrice = 0.90;
    } else if (fruit === 'grapefruit') {
        fruitPrice = 1.60;
    } else if (fruit === 'kiwi') {
        fruitPrice = 3.00;
    } else if (fruit === 'pineapple') {
        fruitPrice = 5.60;
    } else if (fruit === 'grapes') {
        fruitPrice = 4.20; 
    } else {
        isError = true;;
}
}
if(isError == true) {
    console.log('error');
} else {
    let totalPrice = fruitPrice * amount;
    console.log(totalPrice.toFixed(2));
}
}

fruitShop(['orange','Saturday','2'])
