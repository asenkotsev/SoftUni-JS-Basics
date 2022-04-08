function steps(input) {
    let steps = 0;
    while(steps < 10000) {
        let command = input.shift();
          if(command === 'Going home') {
            let addsteps = Number(input.shift());
            steps += addsteps;
            break;
        }  
        let addsteps = Number(command);
        steps += addsteps;
      
    }
if(steps >= 10000) {
    console.log('Goal reached! Good job!');
} else {
    console.log(`${10000 - Number(steps)} more steps to reach goal.`);
}
}

steps([ '1500', '300', '2500', '3000', 'Going home', '200', '' ])