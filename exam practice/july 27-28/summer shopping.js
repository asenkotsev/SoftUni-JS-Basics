function summerShopping(input) {
    let budget = Number(input.shift());
    let towel = Number(input.shift());
    let discount = Number(input.shift());
    let umbrella = towel*2/3;
    let flipflops = umbrella*0.75;
    let beachBag = (towel + flipflops)*1/3;
    let totalCost = (towel + umbrella + flipflops + beachBag) - (towel + umbrella + flipflops + beachBag)*discount/100;
    let diff = Math.abs(budget - totalCost);

if(budget >= totalCost) {
    console.log(`Annie's sum is ${totalCost.toFixed(2)} lv. She has ${diff.toFixed(2)} lv. left.`)
} else {
    console.log(`Annie's sum is ${totalCost.toFixed(2)} lv. She needs ${diff.toFixed(2)} lv. more.`)
}
}

summerShopping([40,15,5])