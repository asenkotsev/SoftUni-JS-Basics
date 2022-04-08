function tickets(input) {
    let a1 = Number(input.shift());
    let a2 = Number(input.shift());
    let n = Number(input.shift());
    let char1 = 0;
    let char2 = 0;
    let char3 = 0;
    let char4 = 0;
    let isValid = false;
    for (let i = a1; i <= (a2 - 1); i++) {
        if (i % 2 !== 0) {
            char1 = (String.fromCharCode(i));
            char4 = i;
        } else {
            continue;
        }
        for (let j = 1; j <= (n - 1); j++) {
            char2 = j;
            for (let l = 1; l <= (n / 2 - 1); l++) {
                char3 = l;
                if ((char2 + char3 + char4) % 2 !== 0) {
                    console.log(`${char1}-${char2}${char3}${char4}`);
                }
            }
        }
    }
}


tickets([86, 88, 4])