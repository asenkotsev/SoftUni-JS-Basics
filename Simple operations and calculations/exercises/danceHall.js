function danceHall(input) {
    let length = Number(input.shift());
    let width = Number(input.shift());
    let a = Number(input.shift());
    let roomArea = (length*100)*(width*100);
    let wardrobeArea = (a*100)*(a*100);
    let benchArea = roomArea/10;
    let freeArea = roomArea - wardrobeArea - benchArea;
    let dancerAmount = parseInt(freeArea/(40 + 7000));
console.log(dancerAmount);
}

danceHall( ["50","25","2"] )

