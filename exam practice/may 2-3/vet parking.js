function parking(input) {
    let days = Number(input.shift());
    let hours = Number(input.shift());
    let total = 0;
    for (let i = 1; i <= days; i++) {
        let day = 0;
        for (let j = 1; j <= hours; j++) {
            if (i % 2 == 0 && j % 2 != 0) {
                day += 2.5;
            } else if (i % 2 != 0 && j % 2 == 0) {
                day += 1.25;
            } else {
                day += 1;
            }
        }
        console.log(`Day: ${i} - ${day.toFixed(2)} leva`);
        total += day;
    }
    console.log(`Total: ${total.toFixed(2)} leva`);
}

parking([2, 5])