function graduation(input) {
    let student = input.shift();
    let year = 1;
    let sum = 0;
    failCounter = 0

    while (year <= 12) {
        let grade = Number(input.shift());
        if (grade >= 4) {
            sum += grade;
            year++;
            failCounter = 0;
        } 
        if (grade < 4) {
            failCounter++
        }
        if (failCounter == 2) {
            break;
        }
    }
    if(failCounter == 0) {
    let average = (sum / 12).toFixed(2);
    console.log(`${student} graduated. Average grade: ${average}`);
} else {
    console.log(`${student} has been excluded at ${year} grade`)
}
}

graduation([
    'Mimi', '5', '6',
    '5',    '6', '5',
    '6',    '6', '2',
    '3'
  ]
)