function sleepyCat(input) {
    let restdays = Number(input.shift());
    let workdays = 365 - restdays;
    let play = restdays*127 + workdays*63;
    let remainingTime = Math.abs(30000-play);
    let hours = Math.trunc(remainingTime/60);
    let minutes = Math.trunc(remainingTime - (hours * 60))
    
    if(play > 30000) {
    console.log('Tom will run away')
    console.log(`${hours} hours and ${minutes} minutes more for play`)
} else {
    console.log('Tom sleeps well')
    console.log(`${hours} hours and ${minutes} minutes less for play`)
    }
}

sleepyCat(["20"])