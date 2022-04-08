function movie(input) {
    let command = input.shift();
    let points = 0;
    let counter = 0;
    let max = Number.MIN_SAFE_INTEGER;
    let maxName = '';
    while (command !== 'STOP') {
        let movie = command;
        for (let i = 0; i < movie.length; i++) {
            points += movie.charCodeAt(i);
            if (movie[i] == movie[i].toLowerCase() && movie[i] !== ' ') {
                points -= 2 * (movie.length);
            } else if (movie[i] == movie[i].toUpperCase() && movie[i] !== ' ') {
                points -= movie.length;
            }
        }
        if(max < points) {
            max = points;
            maxName = movie;
        }
        counter++;
        if (counter >= 7) {
            console.log('The limit is reached.');
            break;
        }
        points = 0;
        command = input.shift();
    }
    console.log(`The best movie for you is ${maxName} with ${max} ASCII sum.`);
}

movie(['Matrix', 'Breaking bad', 'Legend', 'STOP'])