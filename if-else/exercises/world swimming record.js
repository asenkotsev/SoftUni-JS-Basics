function swimmingRecord(input) {
    let recordInSecond = Number(input.shift());
    let distanceInMeter = Number(input.shift());
    let oneMeterInSecond = Number(input.shift());
    let time = distanceInMeter*oneMeterInSecond
    let frictionLoss = Math.trunc(distanceInMeter/15)*12.5;
    let swimmingTime = time + frictionLoss;
if(recordInSecond > swimmingTime) {
    console.log(`Yes, he succeeded! The new world record is ${swimmingTime.toFixed(2)} seconds.`);
} else {
    let swimmingLoss = Math.abs(recordInSecond - swimmingTime);
    console.log(`No, he failed! He was ${swimmingLoss.toFixed(2)} seconds slower.`);
    }
}

swimmingRecord(['10464','1500','20'])