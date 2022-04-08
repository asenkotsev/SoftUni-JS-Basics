function cruiseGames(input) {
    let name = input.shift();
    let n = Number(input.shift());
    let volleyballCounter = 0;
    let tennisCounter = 0;
    let badmintonCounter = 0;
    let voleyballPoints = 0;
    let tennisPoints = 0;
    let badmintonPoints = 0;

    for (let i = 0; i < n; i++) { 
        let game = input.shift();
        let points = Number(input.shift());
        if (game === 'volleyball') {
            voleyballPoints += points += points * 0.07;
            volleyballCounter++;
        } else if (game === 'tennis') {
            tennisPoints += points += points * 0.05;
            tennisCounter++;
        } else if (game === 'badminton') {
            badmintonPoints += points += points * 0.02;
            badmintonCounter++;
        }
    }
    if (voleyballPoints / volleyballCounter >= 75) {
        if (tennisPoints / tennisCounter >= 75) {
            if (badmintonPoints / badmintonCounter >= 75) {
                console.log(`Congratulations, ${name}! You won the cruise games with ${Math.trunc(voleyballPoints + tennisPoints + badmintonPoints)} points.`)
            } else {
                console.log(`Sorry, ${name}, you lost. Your points are only ${Math.trunc(voleyballPoints + tennisPoints + badmintonPoints)}.`)
            }
        } else {
            console.log(`Sorry, ${name}, you lost. Your points are only ${Math.trunc(voleyballPoints + tennisPoints + badmintonPoints)}.`)
        }
    } else {
        console.log(`Sorry, ${name}, you lost. Your points are only ${Math.trunc(voleyballPoints + tennisPoints + badmintonPoints)}.`)
    }
}

cruiseGames([
    'Annie',      '5',
    'badminton',  '34',
    'tennis',     '76',
    'badminton',  '10',
    'volleyball', '62',
    'badminton',  '56'
  ]
  )