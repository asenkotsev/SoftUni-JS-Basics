function alcoholMarket(input) {
    let whiskeyPrice = Number(input.shift());
    let beerAmount = Number(input.shift());
    let wineAmount = Number(input.shift());
    let rakiaAmount = Number(input.shift());
    let whiskeyAmount = Number(input.shift());
    let rakiaPrice = whiskeyPrice - 0.5*whiskeyPrice;
    let winePrice = rakiaPrice - 0.4*rakiaPrice;
    let beerPrice =  rakiaPrice - 0.8*rakiaPrice;
    let whiskeySum = whiskeyPrice*whiskeyAmount;
    let rakiaSum = rakiaPrice*rakiaAmount;
    let wineSum = winePrice*wineAmount;
    let beerSum = beerPrice*beerAmount;
    let sum = whiskeySum + rakiaSum + wineSum + beerSum;
console.log(sum.toFixed(2));
}

alcoholMarket( ['50','10','3.5','6.5','1'] )