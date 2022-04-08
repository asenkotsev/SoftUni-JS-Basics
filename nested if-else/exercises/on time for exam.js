function onTime(input) {
    let ExamTimeInHour = Number(input.shift());
    let ExamTimeInMin = Number(input.shift());
    let ArriveTimeInHour = Number(input.shift());
    let ArriveTimeInMin = Number(input.shift());

ExamTimeInMin = ExamTimeInHour*60 + ExamTimeInMin;
ArriveTimeInMin = ArriveTimeInHour*60 + ArriveTimeInMin;

let diff = ExamTimeInMin - ArriveTimeInMin;
let minutes = Math.abs(diff % 60);
let hours = Math.trunc(Math.abs(diff)/60);

if (diff > 0 && diff >= 31) {
    console.log('Early');
    if (diff < 60) {
        console.log(`${minutes} minutes before the start`);
    } else {
        if ((minutes) <= 9 || minutes == 0) {
            console.log(`${hours}:0${minutes} hours before the start`);
        } else {
            console.log(`${hours}:${minutes} hours before the start`);
        }
    }
} else if (diff == 0 || (diff <= 30 && diff > 0)) {
    console.log('On time');
    if(diff !== 0) {
        console.log(`${minutes} minutes before the start`);
    }
} else {
    console.log('Late');
    diff = Math.abs(diff);
    if (diff < 60) {
        console.log(`${minutes} minutes after the start`);
    } else {
        if (minutes <= 9 || minutes == 0) {
            console.log(`${hours}:0${minutes} hours after the start`);
        } else {
            console.log(`${Math.trunc(hours)}:${minutes} hours after the start`);
        }
    }
}
}

onTime([
    9,
    00,
    10,
    00
])