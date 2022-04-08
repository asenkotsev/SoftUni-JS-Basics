function flowerShop(input) {
    let magnolias = Number(input.shift());
    let hyacinths = Number(input.shift());
    let roses = Number(input.shift());
    let cactuses = Number(input.shift());
    let giftPrice = Number(input.shift());
    let profit = (magnolias * 3.25 + hyacinths * 4 + roses * 3.5 + cactuses * 8) * 0.95;
    let diff = Math.abs(profit - giftPrice);

    if(profit >= giftPrice) {
        console.log(`She is left with ${Math.trunc(diff)} leva.`);
} else {
    console.log(`She will have to borrow ${Math.ceil(diff)} leva.`);
}
}

flowerShop([
15,
7,
5,
10,
100    
])