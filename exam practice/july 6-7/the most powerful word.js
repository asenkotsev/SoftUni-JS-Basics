function powerfulWord(input) {
    let command = input.shift();
    let isValid = false;
    let maxWord = '';
    let max = Number.MIN_SAFE_INTEGER;
    while (command !== 'End of words') {
        let word = command;
        let wordPower = 0;
        for (let i = 0; i < word.length; i++) {
            switch (word.charCodeAt(0)) {
                case 65:
                case 69:
                case 73:
                case 79:
                case 85:
                case 89:
                case 97:
                case 101:
                case 105:
                case 111:
                case 117:
                case 121:
                    isValid = true; break;
                default: isValid = false; break;
            }
            wordPower += word.charCodeAt(i);
        }
        
        if (isValid) {
            wordPower *= word.length;
        } else {
            Math.floor(wordPower /= word.length);
        }

        if (wordPower > max) {
            max = wordPower;
            maxWord = word;
        }
        wordPower = 0
        command = input.shift();
    }
    console.log(`The most powerful word is ${maxWord} - ${max}`);
}

powerfulWord(['But', 'Some', 'People', 'Say', "It's", 'LOVE', 'End of words'])