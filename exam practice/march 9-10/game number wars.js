function numberWars(input) {
    let player1 = input.shift();
    let player2 = input.shift();
    let command = input.shift();
    let counter = 0;
    let card1 = 0;
    let card2 = 0;
    let points1 = 0;
    let points2 = 0;
    while (command !== 'End of game') {
        let card = Number(command);
        counter++;
        if (counter % 2 != 0) {
            card1 = card;
            command = input.shift();
            continue;
        } else {
            card2 = card;
            if (card1 > card2 && card2 !== 0) {
                points1 += (card1 - card2);
            } else if (card1 < card2 && card2 !== 0) {
                points2 += (card2 - card1);
            } else if (card1 == card2) {
                console.log('Number wars!');
                card1 = Number(input.shift());
                card2 = Number(input.shift());
                if (card1 > card2) {
                    console.log(`${player1} is winner with ${points1} points`);
                    break;
                } else {
                    console.log(`${player2} is winner with ${points2} points`);
                    break;
                }
            }
        }
        command = input.shift();
    }
    if (command == "End of game") {
        console.log(`${player1} has ${points1} points`);
        console.log(`${player2} has ${points2} points`);
    }
}

numberWars(['Elena','Simeon', 6, 3, 2, 5, 8, 9,'End of game'])