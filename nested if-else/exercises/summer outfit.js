function outfit(input) {
    let temperature = Number(input.shift());
    let timeOfDay = input.shift();
    let outfit;
    let shoes;

    switch (timeOfDay) {
        case 'Morning':
            if (10 <= temperature && temperature <= 18) {
                outfit = 'Sweatshirt';
                shoes = 'Sneakers';
            } else if (18 < temperature && temperature <= 24) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            } else if (temperature >= 25) {
                outfit = 'T-Shirt';
                shoes = 'Sandals'
            }
            break;
        case 'Afternoon':
            if (10 <= temperature && temperature <= 18) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            } else if (18 < temperature && temperature <= 24) {
                outfit = 'T-Shirt';
                shoes = 'Sandals';
            } else if (temperature >= 25) {
                outfit = 'Swim Suit';
                shoes = 'Barefoot'
            }
            break;
        case 'Evening':
            if (10 <= temperature && temperature <= 18) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            } else if (18 < temperature && temperature <= 24) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            } else if (temperature >= 25) {
                outfit = 'Shirt';
                shoes = 'Moccasins'
            }
            break;
    }
console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`)
}

outfit(['16','Morning'])