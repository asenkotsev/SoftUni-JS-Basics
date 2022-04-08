function tailoringWorkshop(input) {
    let rectangleTables = Number(input.shift());
    let rectangleLength = Number(input.shift());
    let rectangleWidth = Number(input.shift());
    let tableCloth = rectangleTables*(rectangleLength + 2*0.30)*(rectangleWidth +2*0.30);
    let quad = rectangleTables*(rectangleLength/2)*(rectangleLength/2);
    let priceInUsd = (tableCloth*7 + quad*9);
    let priceInBgn = priceInUsd*1.85;
console.log(`${priceInUsd.toFixed(2)} USD`);
console.log(`${priceInBgn.toFixed(2)} BGN`);
}

tailoringWorkshop( ['5','1.00','0.50'] )