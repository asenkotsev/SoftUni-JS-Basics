function travelling(input) {
    let i = 0;
    let destination = input[0];
    let neededMoney = 0;
    while (destination !== 'End') {
        destination = input.shift();
        neededMoney = Number(input.shift());
        while (neededMoney > 0) {
            let savedMoney = Number(input.shift());
            neededMoney -= savedMoney
            if (neededMoney <= 0) {
                console.log(`Going to ${destination}!`)
                break;
            }
        }
    }
}

travelling(["Greece", 1000, 200, 200, 300, 100, 150, 240, "Spain", 1200, 300, 500, 193, 423, "End"])