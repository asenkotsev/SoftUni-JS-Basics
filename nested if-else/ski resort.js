function skiResort(input) {
    let days = Number(input.shift());
    let roomType = input.shift();
    let feedback = input.shift();
    let price = Number;

if (roomType === 'room for one person') {
    price = (days - 1)* 18;
} else if (roomType === 'apartment') {
    if(days < 10) {
        price = ((days - 1) * 25)*0.70;
    } else if(days >=10 && days <=15) {
        price = ((days -1) * 25)*0.65;
    } else if (days > 15) {
        price = ((days -1) * 25)*0.50;
    }
} else if (roomType === 'president apartment') {
    if(days < 10) {
        price = ((days - 1) * 35)*0.00;
    } else if(days >=10 && days <=15) {
        price = ((days -1) * 35)*0.85;
    } else if (days > 15) {
        price = ((days -1) * 35)*0.80;
    }
}

if(feedback === 'negative') {
    price = price - price*0.10;
    console.log(price.toFixed(2))
} else if(feedback === 'positive') {
    price = price + price*0.25
    console.log(price.toFixed(2))
}
}

skiResort(['14','apartment','positive'])