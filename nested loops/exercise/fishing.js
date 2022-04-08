function fishing(input) {
    let n = Number(input.shift());
    let command = input.shift();
    let quotaCounter = 0;
    let profit = 0;
    let counter = 0;
    let lost = 0;
    let positive = 0;
    let lose = 0;
    while (command !== 'Stop') {
        let name = command;
        let kg = Number(input.shift());
        for (let i = 0; i < n; i++) {
            counter++
            lose = 0;
            positive = 0;
            for (let j = 0; j < name.length; j++) {
                if (counter % 3 === 0) {
                    positive += name.charCodeAt(j);
                } else {
                    lose += name.charCodeAt(j);
                }
            }
            quotaCounter++;
            positive /= kg;
            lose /= kg;
            profit += positive;
            lost += lose;
            break;
        }
        if (quotaCounter == n) {
            console.log("Lyubo fulfilled the quota!")
            break;
        }
        command = input.shift();
    }
    let diff = Math.abs(profit - lost);
    if (profit > lost) {
        console.log(`Lyubo's profit from ${quotaCounter} fishes is ${diff.toFixed(2)} leva.`);
    } else {
        console.log(`Lyubo lost ${diff.toFixed(2)} leva today.`);
    }
}

fishing(['10', 'Pike', '15', 'Grass Carp', '40', 'Common Rudd', '7', 'Perch', '20', 'Stop'])