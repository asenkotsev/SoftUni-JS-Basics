function circleAreaAndPerimeter(input) {
    let r = Number(input.shift());
    let pi = Math.PI;
    let area = r * r * pi;
    let perimeter = 2 * r * pi;
    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}

circleAreaAndPerimeter(['3'])