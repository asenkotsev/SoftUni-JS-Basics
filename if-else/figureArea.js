function figureArea(input) {
    let type = input.shift();
    let area;
if (type === 'square') {
    let a = Number(input.shift());
    area = a * a;
} else if (type === 'rectangle') {
    let a = Number(input.shift());
    let b = Number(input.shift());
    area = a * b;
} else if (type === 'circle') {
    let r = Number(input.shift());
    area = Math.PI * r * r;
} else if (type === 'triangle') {
    let a = Number(input.shift());
    let h = Number(input.shift());
    area = (a*h)/2;
    }
console.log(area.toFixed(3));
}

figureArea(['triangle','4.5','20'])