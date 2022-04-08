function greaterNumber(input) {
    let a1 = Number(input.shift());
    let a2 = Number(input.shift());

if (a1>a2) {
    console.log(a1)
} else {
    console.log(a2)
    }
}

greaterNumber(['8','7'])