function harvest(input) {
    let vineyard = Number(input.shift());
    let grapePerM2 = Number(input.shift());
    let neededWine = Number(input.shift());
    let workers = Number(input.shift());
    let grape = vineyard * grapePerM2;
    let wine = 0.4 * grape / 2.5;
    let diff = Math.abs(neededWine - wine);

    if(wine >= neededWine) {
        console.log(`Good harvest this year! Total wine: ${Math.trunc(wine)} liters.`)
        console.log(`${Math.ceil(diff)} liters left -> ${Math.ceil(diff/workers)} liters per person.`)
    } else {
        console.log(`It will be a tough winter! More ${Math.trunc(diff)} liters wine needed.`)
    }
}

harvest([
    650,
    2,
    175,
    3,

    ])