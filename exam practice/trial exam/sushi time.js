function sushiTime(input) {
    let sushiType = input.shift();
    let restaurantName = input.shift();
    let servingAmount = Number(input.shift());
    let delivery = input.shift();
    let price = 0;

    switch (restaurantName) {
        case 'Sushi Zone':
            if(sushiType == 'sashimi') {
                price = 4.99 * servingAmount;
            } else if (sushiType == 'maki') {
                price = 5.29 * servingAmount;
            } else if (sushiType == 'uramaki') {
                price = 5.99 * servingAmount;
            } else if (sushiType == 'temaki') {
                price = 4.29 * servingAmount;
            }
            break;
        case 'Sushi Time':
                if(sushiType == 'sashimi') {
                    price = 5.49 * servingAmount;
                } else if (sushiType == 'maki') {
                    price = 4.69 * servingAmount;
                } else if (sushiType == 'uramaki') {
                    price = 4.49 * servingAmount;
                } else if (sushiType == 'temaki') {
                    price = 5.19 * servingAmount;
                }
            break;
        case 'Sushi Bar':
                if(sushiType == 'sashimi') {
                    price = 5.25 * servingAmount;
                } else if (sushiType == 'maki') {
                    price = 5.55 * servingAmount;
                } else if (sushiType == 'uramaki') {
                    price = 6.25 * servingAmount;
                } else if (sushiType == 'temaki') {
                    price = 4.75 * servingAmount;
                }
            break;
        case 'Asian Pub':
                if(sushiType == 'sashimi') {
                    price = 4.50 * servingAmount;
                } else if (sushiType == 'maki') {
                    price = 4.80 * servingAmount;
                } else if (sushiType == 'uramaki') {
                    price = 5.50 * servingAmount;
                } else if (sushiType == 'temaki') {
                    price = 5.50 * servingAmount;
                }
            break;
        default:
            console.log(`${restaurantName} is invalid restaurant!`);
            break;
    }
    if(price > 0 && delivery == 'N') {
        console.log(`Total price: ${Math.ceil(price)} lv.`);
    } else if (price > 0 && delivery == 'Y') {
        console.log(`Total price: ${Math.ceil(price*1.2)} lv.`)
    }
}

sushiTime(['maki', 'Sushi Zone', '4', 'Y', ''])