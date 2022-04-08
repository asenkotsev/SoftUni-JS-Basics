function filmShoot(input) {
    let budget = Number(input.shift());
    let crew = Number(input.shift());
    let clothingPerCrewPrice = Number(input.shift());
    let decoratingPrice = budget - 0.90*budget;
    let clothingPrice;
    
    if (crew > 150 ) {
        clothingPrice = (clothingPerCrewPrice*crew) - (clothingPerCrewPrice*crew)*0.10; 
    } else {
        clothingPrice = (clothingPerCrewPrice*crew);
    }
    
    if (budget >= clothingPrice + decoratingPrice) {
        let leftMoney = (budget - clothingPrice - decoratingPrice);
        console.log("Action!");
        console.log(`Wingard starts filming with ${leftMoney.toFixed(2)} leva left.`);
    } else {
        let neededMoney = (budget - clothingPrice - decoratingPrice);
        console.log("Not enough money!");
        console.log(`Wingard needs ${Math.abs(neededMoney).toFixed(2)} leva more.`);
    }
}

filmShoot([`9587.88`,'222','55.68'])
filmShoot([`20000`,'120','55.5'])