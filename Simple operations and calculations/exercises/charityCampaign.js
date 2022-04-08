function charityCampaign(input) {
    let days = Number(input.shift());
    let cooks = Number(input.shift());
    let cakes = Number(input.shift());
    let waffles = Number(input.shift());
    let pancakes  = Number(input.shift());
    let cakeSales = cakes*45;
    let waffleSales = waffles*5.80;
    let pancakeSales = pancakes*3.20;
    let oneDaySum = (cakeSales + waffleSales + pancakeSales)*cooks;
    let CampaingSum = oneDaySum*days;
    let profit = CampaingSum - (1/8)*CampaingSum;
console.log(profit.toFixed(2));
}

charityCampaign( ['20','8','14','30','16'] )