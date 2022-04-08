function transportPrice(input) {
    let distance = Number(input.shift());
    let timeOfDay = input.shift();
    let price;

if(distance < 20) {
    if(timeOfDay === 'day') {
        price = distance * 0.79 + 0.70;
    } else if (timeOfDay === 'night') {
        price = distance * 0.90 + 0.70;
    }
}else if (distance >= 20 && distance < 100) {
        price = distance * 0.09;
}else if(distance >= 100) {
    price = distance * 0.06;
}
console.log(price.toFixed(2))
}

transportPrice([180,'night'])
