function salary(input) {
    let n = Number(input.shift());
    let salary = Number(input.shift());

for(i = 0; i < n; i++) {
    let site = input[i];
    if(site === 'Facebook') {
        salary -= 150;
    } else if(site === 'Instagram') {
        salary -= 100;
    } else if (site === 'Reddit') {
        salary -= 50;
    }
    if (salary <= 0) {
        break;
    }
}
if(salary <= 0) {
    console.log('You have lost your salary.');
} else {
    console.log(salary)
}
}

salary([
    '10',        '750',
    'Facebook',  'Dev.bg',
    'Instagram', 'Facebook',
    'Reddit',    'Facebook',
    'Facebook'
  ])