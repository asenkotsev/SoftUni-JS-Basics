function nameWars(input) {
    let index = 0;
    let command = input[index];
    let sum = 0;
    let winnerName = '';
    let winnerScore = 0;

    while (command !== 'STOP') {
        let name = command;
        let tempScoreName = 0;
        for (let i = 0; i < name.length; i++) {
            tempScoreName += (name.charCodeAt(i));
        }
        if(tempScoreName > winnerScore) {
            winnerScore = tempScoreName;
            winnerName = name;
        }
        command = input[++index]
    }
console.log(`Winner is ${winnerName} - ${winnerScore}!`)
}

nameWars(['Petar','Georgi','Stanimir', 'STOP'])