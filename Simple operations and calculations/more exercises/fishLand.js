function fishLand(input) {
    let mackerelPrice = Number(input.shift());
    let spratPrice = Number(input.shift());
    let bonitoWeight = Number(input.shift());
    let horseMackerelWeight = Number(input.shift());
    let musselsWeight = Number(input.shift());
    let musselsPrice = musselsWeight*7.5;
    let bonitoPrice = (mackerelPrice+mackerelPrice*0.6)*bonitoWeight;
    let horseMackerelPrice = (spratPrice+spratPrice*0.8)*horseMackerelWeight;
    let total = (musselsPrice + bonitoPrice + horseMackerelPrice).toFixed(2);
    console.log(total)
}

fishLand( ['6.90','4.20','1.5','2.5','1'] )