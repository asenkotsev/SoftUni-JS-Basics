function tournament(input) {
    let points = Number(input.shift());
    let i = 0
    let moves = 0;
    while (points != 0) {
        let type = input[i];
        let score = Number(input[++i]);
        if (type == 'number section') {
            points -= score;
            moves++;
        } else if (type == 'double ring') {
            score *= 2;
            points -= score;
            moves++;
        } else if (type == 'triple ring') {
            score *= 3;
            points -= score;
            moves++;
        } else if (type == 'bullseye') {
            moves++;
            console.log(`Congratulations! You won the game with a bullseye in ${moves} moves!`)
            break;
        }
        if (points == 0) {
            console.log(`Congratulations! You won the game in ${moves} moves!`)
        }else if(points < 0) {
            let diff = Math.abs(points)
            console.log(`Sorry, you lost. Score difference: ${diff}.`);
            break;
        }
        i++;
    }
}

tournament([
    '75',
    'triple ring',
    '17',
    'number section',
    '16',
    'triple ring',
    '13',
    'double ring',
    '10'
  ])