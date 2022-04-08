function numInRange(input) {
    let num = Number(input.shift());
    
while(num < 1 || num > 100 ) {
        num = Number(input.shift());
    } 
    console.log(`The number is ${num}`)
}

numInRange([0,100,3,4,3,50,60])

