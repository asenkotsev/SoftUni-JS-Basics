function volleyball(input) {
    let yearType = input.shift();
    let holidays = Number(input.shift());
    let weekendsAtHome = Number(input.shift());
    let weekends = 48 - weekendsAtHome;
    let games = weekends * 3/4 + weekendsAtHome + holidays * 2/3;

if(yearType === 'normal') {
    games = Math.trunc(games); 
} else if (yearType === 'leap') {
    games = Math.trunc(games*1.15);
}
console.log(games);
}

volleyball([
    'normal',
11,
6,
])