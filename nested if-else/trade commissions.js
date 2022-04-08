function tradeCommissions(input) {
    let city = input.shift();
    let sales = Number(input.shift());
    let isError = false;

if (city === 'Sofia') {
    if(0 <= sales && sales <= 500) {
        sales = sales * 0.05
    } else if (500 < sales && sales <= 1000) {
        sales = sales * 0.07;
    } else if (1000 < sales && sales <= 10000) {
        sales = sales * 0.08;
    } else if (sales > 10000) {
        sales = sales * 0.12;
    } else {
        isError = true;
    }
} else if (city === 'Varna') {
    if(0 <= sales && sales <= 500) {
        sales = sales * 0.045;
    } else if (500 < sales && sales <= 1000) {
        sales = sales * 0.075;
    } else if (1000 < sales && sales <= 10000) {
        sales = sales * 0.10;
    } else if (sales > 10000) {
        sales = sales * 0.13;
    } else {
        isError = true;
    }
} else if (city === 'Plovdiv') {
   if(0 <= sales && sales <= 500) {
        sales = sales * 0.055;
    }else if (500 < sales && sales <= 1000) {
        sales = sales * 0.08;
    }else if (1000 < sales && sales <= 10000) {
        sales = sales * 0.12;
    }else if (sales > 10000) {
        sales = sales * 0.145;
    } else {
        isError = true;
    }  
} else {
    isError = true;
}
if(isError) {
    console.log('error')
} else {
    console.log(sales.toFixed(2))
}
}



tradeCommissions(['Sofia','500'])