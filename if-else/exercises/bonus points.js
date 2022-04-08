function bonusPoints(input) {
    let points = Number(input.shift());
    let bonusPoints;

if (points <= 100) {
        bonusPoints = 5;
    } else if (points <= 1000) {
        bonusPoints = 0.20*points;
    } else {
        bonusPoints = 0.10*points;
    }

if (points % 2 === 0) {
    bonusPoints = bonusPoints + 1;

} else if (points % 10 === 5) {
    bonusPoints = bonusPoints + 2;
    }
    let pointsTotal = points + bonusPoints;
    console.log(bonusPoints.toFixed(2));
    console.log(pointsTotal.toFixed(2));
}

bonusPoints(['1001'])


