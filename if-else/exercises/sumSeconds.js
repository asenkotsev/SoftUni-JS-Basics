function sumSeconds(input) {
    let sec1 = Number(input.shift());
    let sec2 = Number(input.shift()); 
    let sec3 = Number(input.shift());
    let secTotal = sec1 + sec2 + sec3;
    let minutes = 0;
    
if (secTotal > 59) {
    minutes = minutes + 1;
    secTotal = secTotal - 60;
}

if (secTotal > 59) {
    minutes = minutes + 1;
    secTotal = secTotal - 60;
}

if (secTotal < 10) {
    console.log(`${minutes}:0${secTotal}`);
} else {
    console.log(`${minutes}:${secTotal}`);
    }
}


sumSeconds(['50','50','50'])