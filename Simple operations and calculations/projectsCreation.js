function projectsCreation(input) {
    let name = input.shift();
    let projects = Number(input.shift());
    let neededHours = (projects * 3);
    console.log(`The architect ${name} will need ${neededHours} hours to complete ${projects} project/s.`);
}

projectsCreation(['Pesho', '5'])