function celsiusToFarenheit(input) {
    let celsius = Number(input.shift());
    let farenheit = celsius*1.8 + 32;
    console.log(farenheit.toFixed(2))
}

celsiusToFarenheit( ['25'] )