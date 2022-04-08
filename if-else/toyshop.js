function toyshop(input) {
    let excursionCost = Number(input.shift());
    let puzzleAmount = Number(input.shift());
    let dollAmount = Number(input.shift());
    let bearAmount = Number(input.shift());
    let minionAmount = Number(input.shift());
    let truckAmount = Number(input.shift());
    let amount = puzzleAmount + dollAmount + bearAmount + minionAmount + truckAmount;
    let sum = puzzleAmount * 2.60 + dollAmount * 3 + bearAmount * 4.10 + minionAmount * 8.20 + truckAmount * 2;
    let profit;

    if (amount >= 50) {
        sum = sum - sum*0.25;
    } else {
        sum = sum;
    }
profit = sum - 0.10*sum;

if (profit >= excursionCost) {
    let leftMoney = profit - excursionCost;
    console.log(`Yes! ${leftMoney.toFixed(2)} lv left.`);
} else {
    let neededMoney = Math.abs(excursionCost - profit);
    console.log(`Not enough money! ${neededMoney.toFixed(2)} lv needed.`);
    }
}

toyshop(['40.8','20','25','30','50','10'])
toyshop(['320','8','2','5','5','1'])