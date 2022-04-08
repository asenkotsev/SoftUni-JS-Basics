function vegetableMarket(input) {
   let vegetablePrice = Number(input.shift());
   let fruitPrice = Number(input.shift());
   let vegetableWeight = Number(input.shift());
   let fruitWeight = Number(input.shift());
   let priceInLev = vegetablePrice*vegetableWeight + fruitPrice*fruitWeight;
   let priceInEuro = priceInLev/1.94
   console.log(priceInEuro.toFixed(2)) 
}

vegetableMarket( ['0.194','19.4','10','10'] )