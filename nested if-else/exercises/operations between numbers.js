function operations(input) {
    let num1 = Number(input.shift());
    let num2 = Number(input.shift());
    let operator = input.shift();
    let oddOrEven;
    
    if (operator == '+') {
        if ((num1 + num2) % 2 == 0) {
            oddOrEven = 'even';
        } else {
            oddOrEven = 'odd';
        }
        console.log(`${num1} + ${num2} = ${num1 + num2} - ${oddOrEven} `);
    } else if (operator == '-') {
        if ((num1 - num2) % 2 == 0) {
            oddOrEven = 'even';
        } else {
            oddOrEven = 'odd';
        }
        console.log(`${num1} - ${num2} = ${num1 - num2} - ${oddOrEven} `);
    } else if (operator == '*') {
        if ((num1 * num2) % 2 == 0) {
            oddOrEven = 'even';
        } else {
            oddOrEven = 'odd';
        }
        console.log(`${num1} * ${num2} = ${num1 * num2} - ${oddOrEven} `);
    } else if (operator == '/' && num1 !== 0) {
        console.log(`${num1} / ${num2} = ${(num1 / num2).toFixed(2)}`);
    } else if (operator == '%' && num1 !== 0) {
        console.log(`${num1} % ${num2} = ${num1 % num2}`)
    } else {
        console.log(`Cannot divide ${num1} by zero`)
    }
}

operations(['10', '0', '&'])