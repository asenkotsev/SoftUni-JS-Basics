function petShop(input) {
    let dogs = Number(input.shift());
    let otherAnimals = Number(input.shift());
    let total = Number((dogs * 2.5 + otherAnimals * 4));
    console.log(`${total.toFixed(2)} lv.`);
}

petShop(['5', '4'])