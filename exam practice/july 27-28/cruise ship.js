function cruiseShip(input) {
    let cruiseType = input.shift();
    let cabinType = input.shift();
    let sleepovers = Number(input.shift());
    let nightPrice;

    if (cruiseType === 'Mediterranean') {
        if (cabinType === 'standard cabin') {
            nightPrice = 27.50;
        } else if (cabinType === 'cabin with balcony') {
            nightPrice = 30.20;
        } else if (cabinType === 'apartment') {
            nightPrice = 40.50;
        }
    } else if (cruiseType === 'Adriatic') {
        if (cabinType === 'standard cabin') {
            nightPrice = 22.99;
        } else if (cabinType === 'cabin with balcony') {
            nightPrice = 25.00;
        } else if (cabinType === 'apartment') {
            nightPrice = 34.99;
        }
    } else if (cruiseType === 'Aegean') {
        if (cabinType === 'standard cabin') {
            nightPrice = 23.00;
        } else if (cabinType === 'cabin with balcony') {
            nightPrice = 26.60;
        } else if (cabinType === 'apartment') {
            nightPrice = 39.80;
        }
    }
    let cruiseCost;

    if (sleepovers <= 7) {
        cruiseCost = (sleepovers * nightPrice) * 4;
    } else {
        cruiseCost = ((sleepovers * nightPrice) * 0.75) * 4;
    }

    console.log(`Annie's holiday in the ${cruiseType} sea costs ${cruiseCost.toFixed(2)} lv.`)
}

cruiseShip(['Aegean', 'standard cabin', 10])