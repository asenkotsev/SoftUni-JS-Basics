function radianToDegree(input) {
    let radians = Number(input.shift());
    let pi = Math.PI;
    let degrees = radians*180/pi;
console.log(degrees.toFixed(0));
}

radianToDegree( ['3.1416'] );