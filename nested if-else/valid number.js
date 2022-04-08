function isValid(input) {
    let number = Number(input.shift());
if((number >= 100 && number <= 200) || number == 0) {
} else {
    console.log('invalid');
    }
}

isValid(['201'])