function matchTickets(input) {
    let budget = Number(input.shift());
    let category = input.shift();
    let people = Number(input.shift());
    let price;

if(people >= 1 && people <= 4) {
    if (category === 'Normal') {
        price = budget * 0.75 + people*249.99
    } else {
        price = budget * 0.75 + people*499.99
    }
} else if (people >= 5 && people <= 9) {
    if (category === 'Normal') {
        price = budget * 0.60 + people*249.99
    } else {
        price = budget * 0.60 + people*499.99
    }
} else if (people >= 10 && people <= 24) {
    if (category === 'Normal') {
        price = budget * 0.50 + people*249.99
    } else {
        price = budget * 0.50 + people*499.99
    }
} else if (people >= 25 && people <= 49) {
    if (category === 'Normal') {
        price = budget * 0.40 + people*249.99
    } else {
        price = budget * 0.40 + people*499.99
    }
} else if (people > 50) {
    if (category === 'Normal') {
        price = budget * 0.25 + people*249.99
    } else {
        price = budget * 0.25 + people*499.99
    }
}
let diff = Math.abs(price - budget);
if (budget >= price) {
    console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
} else {
    console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
}
}

matchTickets([30000,'VIP',49])
