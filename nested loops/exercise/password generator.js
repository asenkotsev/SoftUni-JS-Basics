function pwdGenerator(input) {
    let n = Number(input.shift());
    let l = Number(input.shift());
    let output = '';
    for (let s1 = 1; s1 <= n; s1++) { 
        for (let s2 = 1; s2 <= n; s2++) {
            for (let s3 = 97; s3 < 97 + l; s3++) { //97 = 'a'
                for (let s4 = 97; s4 < 97 + l; s4++) { //97 = 'a'
                    for (let s5 = 1; s5 <= n; s5++){
                        let thirdSymbol = String.fromCharCode(s3);
                        let fourthSymbol = String.fromCharCode(s4);
                        if(s5 > s1 && s5 > s2) {
                           output += (`${s1}${s2}${thirdSymbol}${fourthSymbol}${s5} `);
                        }    
                    }

                }
            }

        }
    }
    console.log(output);
}

pwdGenerator([10,10])