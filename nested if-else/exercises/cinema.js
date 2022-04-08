function cinema(input) {
    let projectionType = input.shift();
    let rows = Number(input.shift());
    let columns = Number(input.shift());
    let seats = rows * columns;
    price = 0;

    switch (projectionType) {
        case 'Premiere':
            price = seats * 12;
            break;
        case 'Normal':
            price = seats * 7.5;
            break;
        case 'Discount':
            price = seats * 5;
            break;
    }
console.log(`${price.toFixed(2)} leva`)
}

cinema(['Premiere','10','12'])