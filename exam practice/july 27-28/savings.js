function savings(input) {
    let income = Number(input.shift());
    let months = Number(input.shift());
    let spentMoney = Number(input.shift());
    let unexpectedExpenses = 0.3*income;
    let savedMoneyOneMonth = income - spentMoney - unexpectedExpenses;
    let percent = (savedMoneyOneMonth/income)*100;
    let savedMoneyTotal = savedMoneyOneMonth*months;
console.log(`She can save ${percent.toFixed(2)}%`);
console.log(savedMoneyTotal.toFixed(2));
}

savings( ['1500','3','800'] )