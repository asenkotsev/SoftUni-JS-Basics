function sum(input) {
    let command = input.shift();
    let sum = 0;
    let sumPrime = 0;
    let sumNonPrime = 0;

    while (command !== 'stop') {
        let num = Number(command);
        if (num > 0) {
            sum += num;
        }
        if (num < 0) {
            console.log('Number is negative.');
        }
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                sumNonPrime += num;
                break;
            }

        }
        command = input.shift();
    }
    sumPrime = sum - sumNonPrime;
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}

sum([30, 83, 33, -1, 20, 'stop'])