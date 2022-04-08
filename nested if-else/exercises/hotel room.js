function hotelRoom(input) {
    let month = input.shift();
    let sleepovers = Number(input.shift());
    let studioPrice;
    let apartmentPrice;

switch(month) {
    case 'May':
    case 'October':
        studioPrice =  50 * sleepovers;
        apartmentPrice = 65 * sleepovers; 
        break;
    case 'June' :
    case 'September' :
        studioPrice = 75.20 * sleepovers;
        apartmentPrice = 68.70 * sleepovers;
        break;
    case 'July' :
    case 'August' :
        studioPrice = 76 * sleepovers;
        apartmentPrice = 77 * sleepovers;
        break;
}

if(sleepovers > 7 && sleepovers <= 14 && (month === 'May' || month === 'October')) {
    studioPrice = studioPrice * 0.95;
} else if (sleepovers > 14 && (month === 'May' || month === 'October')) {
    studioPrice = studioPrice * 0.70;
} else if (sleepovers > 14 && (month === 'June' || month === 'September')) {
    studioPrice = studioPrice * 0.80;

}if (sleepovers > 14) {
    apartmentPrice = apartmentPrice * 0.90 ;
}
console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}

hotelRoom(['May','8'])
