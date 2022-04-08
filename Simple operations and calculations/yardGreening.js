function yardGreening(input) {
    let area = Number(input.shift());
    let price = Number(area * 7.61);
    let discount = Number(price * 0.18).toFixed(2);
    let finalPrice = Number(price - discount).toFixed(2);
    console.log(`The final price is: ${finalPrice} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}

yardGreening(['540'])