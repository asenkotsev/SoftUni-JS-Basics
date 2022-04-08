function fitnessCenter(input) {
    let n = Number(input.shift());
    let cBack = 0;
    let cChest = 0;
    let cLegs = 0;
    let cAbs = 0;
    let cProteinShake = 0;
    let cProteinBar = 0;
    let cWorkout = 0;
    let cProtein = 0;
    for (let i = 1; i <= n; i++) {
        let visitor = input.shift();
        if (visitor == 'Back') {
            ++cBack;
            ++cWorkout;
        } else if (visitor == 'Chest') {
            ++cChest;
            ++cWorkout;
        } else if (visitor == 'Legs') {
            ++cLegs;
            ++cWorkout;
        } else if (visitor == 'Abs') {
            ++cAbs;
            ++cWorkout;
        } else if (visitor == 'Protein shake') {
            ++cProteinShake;
            ++cProtein;
        } else if (visitor == 'Protein bar') {
            ++cProteinBar;
            ++cProtein;
        }
    }
    console.log(`${cBack} - back`);
    console.log(`${cChest} - chest`);
    console.log(`${cLegs} - legs`);
    console.log(`${cAbs} - abs`);
    console.log(`${cProteinShake} - protein shake`);
    console.log(`${cProteinBar} - protein bar`);
    console.log(`${(cWorkout/(cProtein + cWorkout)*100).toFixed(2)}% - work out`);
    console.log(`${(cProtein/(cProtein + cWorkout)*100).toFixed(2)}% - protein`);
}

fitnessCenter(['10', 'Back', 'Chest', 'Legs', 'Abs', 'Protein shake', 'Protein bar', 'Protein shake', 'Protein bar', 'Legs', 'Abs',])