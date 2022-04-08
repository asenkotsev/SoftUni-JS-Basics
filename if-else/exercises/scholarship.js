function scholarship(input) {
    let income = Number(input.shift());
    let gradeAvg = Number(input.shift());
    let minIncome = Number(input.shift());
    let socialScholarship;
    let resultScholarship;

    if(gradeAvg >= 5.50) {  
    resultScholarship = gradeAvg*25;
} else {
    resultScholarship = 0
}

if(minIncome > income && gradeAvg > 4.50) {
    socialScholarship = minIncome*0.35;
} else {
    socialScholarship = 0
}

if(resultScholarship > socialScholarship ) {
    console.log(`You get a scholarship for excellent results ${Math.trunc(resultScholarship)} BGN`);
} else if (socialScholarship > resultScholarship) {
    console.log(`You get a Social scholarship ${Math.trunc(socialScholarship)} BGN`);
} else {
    console.log("You cannot get a scholarship!");
    }
}


scholarship(['300','6','320'])