function cake(input) {
    let width = Number(input.shift());
    let lenght = Number(input.shift());
    let cakeArea = width * lenght;

while(cakeArea > 0) {
    
    if (command === 'STOP') {
        break;
    }
    let take = Number(command);
    cakeArea -= take;
    let command = input.shift();  
}
if (cakeArea < 0) {
    console.log(`No more cake left! You need ${Math.abs(cakeArea)} pieces more.`)
} else {
    console.log(`${cakeArea} pieces are left.`)
}
}

cake([ '10', '2', '2', '4', '6', 'STOP' ])