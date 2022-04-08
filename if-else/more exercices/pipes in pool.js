function pipesInPool(input) {
    let v = Number(input.shift());
    let p1 = Number(input.shift());
    let p2 = Number(input.shift());
    let hours = Number(input.shift());
    let p1Fill = p1*hours;
    let p2Fill = p2*hours;
    let fill = p1Fill + p2Fill;
if(v >= fill) {
    let percentP1 = (p1Fill/fill)*100;
    let percentP2 = (p2Fill/fill)*100;
    let percentV = fill/v*100;
    console.log(`The pool is ${percentV.toFixed(2)}% full. Pipe 1: ${percentP1.toFixed(2)}%. Pipe 2: ${percentP2.toFixed(2)}%.`);
} else {
    let overflow = fill - v;
    console.log(`For ${hours.toFixed(2)} hours the pool overflows with ${overflow.toFixed(2)} liters.`);
}
}

pipesInPool(['100','100','100','2.5'])