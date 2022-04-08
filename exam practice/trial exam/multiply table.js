function table(input) {
    let n = input.shift();
    let i = n[2];
    let j = n[1];
    let k = n[0];
    for (let a = 1; a <= i; a++) {
        for (let b = 1; b <= j; b++)
        for (let c = 1; c <= k; c++)  
        console.log(`${a} * ${b} * ${c} = ${a*b*c};`)
    }
}

table(['324'])