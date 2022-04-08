function nameGame(input) {
    let command = input.shift();
    let max = Number.MIN_SAFE_INTEGER;
    let maxName = '';
    let score = 0;
    while (command !== 'Stop') {
        let name = command;
        for (let i = 0; i < name.length; i++) {
            let ascii = Number(input.shift());
            if (name.charCodeAt(i) == ascii) {
                score += 10;
            } else {
                score += 2;
            }
            if (score >= max) {
                max = score;
                maxName = name;
            }
        }
        score = 0;
        command = input.shift();
    }
    console.log(`The winner is ${maxName} with ${max} points!`)
}

nameGame(["Ivan", 73, 20, 98, 110, "Ivo", 80, 65, 87, "Stop"])