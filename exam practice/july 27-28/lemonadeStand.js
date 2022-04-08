function lemonadeStand(input) {
    let lemonsKg = Number(input.shift());
    let sugarKg = Number(input.shift());
    let waterLiters = Number(input.shift());
    let lemonJuiceMl = lemonsKg*980;
    let lemonade = lemonJuiceMl + waterLiters*1000 + sugarKg*0.3;
    let soldCups = lemonade/150
    let profit = parseInt(soldCups)*1.20
console.log(`All cups sold: ${parseInt(soldCups)}`);
console.log(`Money earned: ${profit.toFixed(2)}`)
}

lemonadeStand( ['5','3.5','5'] )