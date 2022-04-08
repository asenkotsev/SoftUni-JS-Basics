function trainTheTrainers(input) {
    let n = Number(input.shift());
    let command = input.shift();
    let finalGrade = 0;
    let avgGrade = 0;
    let gradeCounter = 0;
    while (command !== 'Finish') {
        let name = command;
        avgGrade = 0;
        for (let i = 0; i < n; i++) {
            let grade = Number(input.shift());
            avgGrade += grade;
            finalGrade += grade;
            gradeCounter++;
        }
        console.log(`${name} - ${(avgGrade / n).toFixed(2)}.`)
        command = input.shift();
    }
    console.log(`Student's final assessment is ${(finalGrade / gradeCounter).toFixed(2)}.`)
}

trainTheTrainers([2, 'Objects and Classes', 5.77, 4.23, 'Dictionaries', 4.62, 5.02, 'RegEx', 2.88, 3.42, 'Finish'])