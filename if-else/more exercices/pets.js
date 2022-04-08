function pets(input) {
    let days = Number(input.shift());
    let foodInKg = Number(input.shift());
    let dogFood = Number(input.shift());
    let catFood = Number(input.shift());
    let turtleFood = Number(input.shift());
    let foodTotal = (dogFood + catFood + turtleFood/1000) * days;
    let diff = Math.abs(foodInKg - foodTotal);

if(foodInKg - foodTotal >= 0) {
    console.log(`${Math.trunc(diff)} kilos of food left.`);
} else {
    console.log(`${Math.ceil(diff)} more kilos of food are needed.`);
}
}

pets([
2,
10,
1,
1,
1200,
])