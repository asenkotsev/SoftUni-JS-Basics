function seaTrip(input) {
    let foodMoney = Number(input.shift());
    let souvenirMoney = Number(input.shift());
    let hotelMoney = Number(input.shift());
    let fuelMoney = (420 / 100 * 7) * 1.85;
    let firstDay = hotelMoney * 0.9;
    let secondDay = hotelMoney * 0.85;
    let thirdDay = hotelMoney * 0.8;
    let total = fuelMoney + firstDay + secondDay + thirdDay + 3 * foodMoney + 3 * souvenirMoney;
    console.log(`Money needed: ${total.toFixed(2)}`)
}

seaTrip([100, 50, 500])