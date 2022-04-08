function hoursAdd15min(input) {
    let hours = Number(input.shift());
    let minutes = Number(input.shift());
    let totalMin = minutes + 15
    
if (totalMin > 59) {
    hours = hours + 1;
    totalMin = totalMin - 60;
}

if (hours == 24) {
    hours = hours - 24;
}

    if (totalMin < 10) {
    console.log(`${hours}:0${totalMin}`);
} else {
    console.log(`${hours}:${totalMin}`);
    }    
}

hoursAdd15min(['23','59'])