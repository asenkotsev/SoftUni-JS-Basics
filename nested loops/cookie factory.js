function cookieFactory(input) {
    let index = 0;
    let n = Number(input[index]);
    for (let i = 1; i <= n; i++) {
        let command = input[++index];
        let isEggs = false;
        let isSugar = false;
        let isFlour = false;
        let isBake = false;
        while (!isBake) {
            switch (command) {
                case "eggs": isEggs = true; break;
                case "sugar": isSugar = true; break;
                case "flour": isFlour = true; break;
                case "Bake!":
                    if (isEggs && isFlour && isSugar) {
                        isBake = true;
                        console.log(`Baking batch number ${i}...`);
                    } else {
                        console.log("The batter should contain flour, eggs and sugar!");
                    }
                    break;
            }
            if (isEggs && isFlour && isSugar && isBake) {
                break;
            }
            command = input[++index];

        }
    }
}


cookieFactory(['2', 'flour', 'eggs', 'sugar', 'chocolate', 'Bake!', 'flour', 'eggs', 'sugar', 'caramel', 'peanuts', 'Bake!'])