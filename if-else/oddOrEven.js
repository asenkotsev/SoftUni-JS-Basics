function oddOrEven(input) {
    let num = Number(input.shift());
    let isEven = num % 2 === 0;

    if (isEven) {
        console.log('even');
    } else {
        console.log('odd');
    }
}

oddOrEven(['51'])