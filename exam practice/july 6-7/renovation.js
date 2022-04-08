function renovation(input) {
    let height = Number(input.shift());
    let width = Number(input.shift());
    let percent = Number(input.shift());
    let wallsArea = (height * width * 4) - (height * width * 4) * percent / 100;
    let command = input.shift();
    let isDone = false;

    while (command !== 'Tired!') {
        let paint = Number(command);
        if (paint > 0) {
            wallsArea -= paint;
        }
        if (wallsArea <= 0) {
            isDone = true
            break;
        }
        command = input.shift();
    }
    if (isDone !== true) {
        console.log(`${wallsArea} quadratic m left.`)
    } else if (wallsArea == 0) {
        console.log("All walls are painted! Great job, Pesho!");
    } else {
        console.log(`All walls are painted and you have ${Math.abs(wallsArea)} l paint left!`);
    }
}

renovation(['2', '3', '25', '6', '7', '8']);