function sweets(input) {
    let baklavaPrice = Number(input.shift());
    let muffinPrice = Number(input.shift());
    let stolenKg = Number(input.shift());
    let candyKg = Number(input.shift());
    let biscuitsKg = Number(input.shift());
    let stolenPrice = (baklavaPrice * 1.6) * stolenKg;
    let candyPrice = (muffinPrice * 1.8) * candyKg;
    let biscuitsPrice = biscuitsKg * 7.50;
    let total = stolenPrice + candyPrice + biscuitsPrice;
    console.log(total.toFixed(2))
}

sweets([6.90, 4.20, 1.5, 2.5, 1])