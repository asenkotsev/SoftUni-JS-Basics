function moving(input) {
    let width = Number(input.shift());
    let length = Number(input.shift());
    let height = Number(input.shift());
    let apartmentVolume = width*length*height;

while(apartmentVolume > 0) {
    let command = input.shift();
    if(command === 'Done') {
        break;
    }
    let box = Number(command);
    apartmentVolume -= box;
}
if(apartmentVolume < 0) {
    console.log(`No more free space! You need ${Math.abs(apartmentVolume)} Cubic meters more.`)
} else {
    console.log(`${apartmentVolume} Cubic meters left.`)
}
}

moving([
    '10', '10',  '2',
    '20', '20',  '20',
    '20', '122', ''
  ])