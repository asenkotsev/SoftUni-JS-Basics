function vacation(input) {
    let neededMoney = Number(input.shift());
    let ownedMoney = Number(input.shift());
    let dayCounter = 0;
    let spendCounter = 0;

while (neededMoney > ownedMoney) {
    let operation = input.shift();
    let sum = Number(input.shift());
    if(operation === 'spend') {
        ownedMoney -= sum;
        if (ownedMoney < 0) {
            ownedMoney = 0;
        }
        dayCounter++;
        spendCounter++; 
        if(spendCounter == 5) {
            break;
        }     
    }  
if(operation === 'save'){
        ownedMoney += sum;
        spendCounter = 0;
        dayCounter++;
    }
}
if(spendCounter == 5) {
    console.log("You can't save the money.");
    console.log(dayCounter);
} else {
    console.log(`You saved the money for ${dayCounter} days.`)
}
}

vacation([
    '110',   '60',    'spend',
    '10',    'spend', '10',
    'spend', '10',    'spend',
    '10',    'spend', '10'
  ])