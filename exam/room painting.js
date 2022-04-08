function painting(input) {
    let paintAmount = Number(input.shift());
    let wallpapersAmount = Number(input.shift());
    let glovePrice = Number(input.shift());
    let brushPrice = Number(input.shift());
    gloveAmount = Math.ceil(wallpapersAmount * 0.35);
    brushAmount = Math.trunc(paintAmount * 0.48);
    let delivery = (paintAmount * 21.5 + wallpapersAmount * 5.2 + glovePrice * gloveAmount + brushPrice * brushAmount) * 1/15;
    console.log(`This delivery will cost ${delivery.toFixed(2)} lv.`);
}

painting([10, 8, 2.2, 5])