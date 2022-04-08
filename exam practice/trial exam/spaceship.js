function spaceship(input) {
    let width = Number(input.shift());
    let length = Number(input.shift());
    let height = Number(input.shift());
    let avgHeight = Number(input.shift());
    let spaceshipArea = width * length * height;
    let roomArea = (avgHeight + 0.4) * 2 * 2;
    roomAmount = Math.trunc(spaceshipArea / roomArea);

    if (roomAmount >= 3 && roomAmount <= 10) {
        console.log(`The spacecraft holds ${roomAmount} astronauts.`);
    } else if (roomAmount < 3) {
        console.log("The spacecraft is too small.");
    } else if (roomAmount > 10) {
        console.log("The spacecraft is too big.");
    }
}

spaceship([3.5, 4, 5, 1.7])