function greetings(input) {
    let output = 'Hello, '
    let name = input.shift();
    let exclamation = '!';
    console.log(output + name + exclamation);
}

greetings(['Pesho'])

