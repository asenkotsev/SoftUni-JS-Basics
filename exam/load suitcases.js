function loadSuitcases(input) {
let trunkArea = Number(input.shift());
let command = input.shift();
let i = 0;
let isValid = true;
while(command !== 'End') {
    let suitcaseArea = Number(command);
    if((i+1) % 3 == 0) {
        suitcaseArea *= 1.1;
    }
    if(trunkArea >= suitcaseArea) {
        trunkArea -= suitcaseArea;
        i++;
    } else {
        console.log('No more space!');
        isValid = false;
        break;
    }
    command = input.shift();
}
if(isValid) {
    console.log('Congratulations! All suitcases are loaded!');
    console.log(`Statistic: ${i} suitcases loaded.`);
} else {
    console.log(`Statistic: ${i} suitcases loaded.`);
}
}

loadSuitcases([ '550', '548', '1', '1', 'End', '' ])
