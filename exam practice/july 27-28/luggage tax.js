function luggageTax(input) {
    let width = Number(input.shift());
    let height = Number(input.shift());
    let depth = Number(input.shift());
    let isPriority = (input.shift());
    let volume = width * height * depth;
    let tax = 0;

if(volume > 50 && volume <= 100 && isPriority === "false") {
    tax = 25;
} else if (volume > 100 && volume <= 200 && isPriority === "true") {
    tax = 10;
} else if (volume > 100 && volume <= 200 && isPriority === "false") {
    tax = 50;
} else if (volume > 200 && volume <= 300 && isPriority === "true") {
    tax = 20;
} else if (volume > 200 && volume <= 300 && isPriority === "false") {
    tax = 100;
}
console.log(`Luggage tax: ${tax.toFixed(2)}`)
}

luggageTax([10,4,5,'true'])