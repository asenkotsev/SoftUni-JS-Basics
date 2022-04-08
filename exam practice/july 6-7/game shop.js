function gameShop(input) {
    let n = Number(input.shift());
    let hearthstoneC = 0;
    let forniteC = 0;
    let overwatchC = 0;
    let otherC = 0;
    for (let i = 0; i < n; i++) {
        let type = input[i];
        switch (type) {
            case 'Hearthstone':
                hearthstoneC++;
                break;
            case 'Fornite':
                forniteC++;
                break;
            case 'Overwatch':
                overwatchC++;
                break;
            default:
                otherC++;
                break;
        }
    }
    console.log(`Hearthstone - ${(hearthstoneC / n*100).toFixed(2)}%`);
    console.log(`Fornite - ${(forniteC / n*100).toFixed(2)}%`);
    console.log(`Overwatch - ${(overwatchC / n*100).toFixed(2)}%`);
    console.log(`Others - ${(otherC / n*100).toFixed(2)}%`);
}

gameShop(['4', 'Hearthstone', 'Fornite', 'Overwatch', 'Counter-Strike']);