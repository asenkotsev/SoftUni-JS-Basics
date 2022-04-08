function examPreparation(input) {
    let maxBadGrades = Number(input.shift());
    let badGradeCounter = 0;
    let gradeCounter = 0;
    let gradeTotal = 0;
    let taskCounter = 0;
    let lastTask = '';

    while (maxBadGrades > badGradeCounter) {
        let task = input.shift();
        let grade = Number(input.shift());
        if (grade <= 4) {
            badGradeCounter++;
        }
        gradeTotal += grade;
        if(task === 'Enough') {
            break;
        }
        gradeCounter++;
        gradeAvg = (gradeTotal/gradeCounter)
        taskCounter++;
        lastTask = task;
    }
if(maxBadGrades !== badGradeCounter) {
console.log(`Average score: ${gradeAvg.toFixed(2)}`)
console.log(`Number of problems: ${taskCounter}`)
console.log(`Last problem: ${lastTask}`)
} else {
    console.log(`You need a break, ${badGradeCounter} poor grades.`)
}
}

examPreparation([
    '3', 'Money',
    '6', 'Story',
    '4', 'Spring Time',
    '5', 'Bus',
    '6', 'Enough',
    ''
  ])
