function market(input) {
    let neededMoney = Number(input.shift());
    let fantasyBooks = Number(input.shift());
    let horrorBooks = Number(input.shift());
    let romanticBooks = Number(input.shift());
    let profit = (fantasyBooks * 14.9 + horrorBooks * 9.8 + romanticBooks * 4.3) * 0.8;
    let sellersMoney = Math.floor((profit - neededMoney) * 0.1);
    if (profit >= neededMoney) {
        console.log(`${(profit - sellersMoney).toFixed(2)} leva donated.`);
        console.log(`Sellers will receive ${sellersMoney} leva.`)
    } else {
        let diff = Math.abs(profit - neededMoney)
        console.log(`${diff.toFixed(2)} money needed.`);
    }
}

market([200, 15, 10, 5])