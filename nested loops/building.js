function building(input) {
    let floor = Number(input[0])
    let room = Number(input[1])

    for (let i = floor; i > 0; i--) {
        let result = ''
        for (let a = 0; a < room; a++) {
            if (i === floor) {
                result += ` L${i}${a}`
            } else if (i % 2 == 0) {
                result += ` O${i}${a}`
            } else {
                result += ` A${i}${a}`
            }
        }
        console.log(result)
    }

}

building(['6', '4']);