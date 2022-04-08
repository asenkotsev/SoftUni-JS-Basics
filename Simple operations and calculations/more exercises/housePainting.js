function housePainting(input) {
    let x = Number(input.shift());
    let y = Number(input.shift());
    let h = Number(input.shift());
    let door = Number(1.2*2); 
    let frontWall = x*x - door;
    let backWall = x*x;
    let window = Number(1.5*1.5);
    let sideWalls = 2*x*y - 2*window;
    let roof = 2*x*y + x*h;
    let greenPaintNeeded = Number((frontWall+backWall+sideWalls))/3.4;
    let redPaintNeeded = Number(roof)/4.3;
console.log(greenPaintNeeded.toFixed(2));
console.log(redPaintNeeded.toFixed(2));
}

housePainting( ['6','10','5.2'] )