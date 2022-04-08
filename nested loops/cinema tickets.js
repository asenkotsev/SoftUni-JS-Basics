function cinemaTickets(input) {
  let allTickets = 0;
  let standardTickets = 0;
  let studentTickets = 0;
  let kidTickets = 0;
  let movie = input.shift();
  while (movie !== 'Finish') {
    let seatsCount = Number(input.shift());
    let currentStandardT = 0;
    let currentStudentT = 0;
    let currentKidT = 0;
    let count = 1;
    let currentTicket = input.shift();
    while (currentTicket !== 'End') {
      if (currentTicket === 'student') {
        currentStudentT++;
      } else if (currentTicket === 'kid') {
        currentKidT++;
      } else {
        currentStandardT++;
      }
      if (seatsCount === count) {
        break;
      }
      count++;
      currentTicket = input.shift();;
    }
    let allCurrentTickets = currentStandardT + currentStudentT + currentKidT;
    let percentageFull = (allCurrentTickets / seatsCount) * 100;
    console.log(`${movie} - ${percentageFull.toFixed(2)}% full.`)
    allTickets += allCurrentTickets;
    standardTickets += currentStandardT;
    studentTickets += currentStudentT;
    kidTickets += currentKidT;
    if (currentTicket === 'Finish') {
      break;
    }
    movie = input.shift();
  }
  console.log(`Total tickets: ${allTickets}`);
  console.log(`${((studentTickets / allTickets) * 100).toFixed(2)}% student tickets.`);
  console.log(`${((standardTickets / allTickets) * 100).toFixed(2)}% standard tickets.`);
  console.log(`${((kidTickets / allTickets) * 100).toFixed(2)}% kids tickets.`);
}

cinemaTickets([
  'Taxi', '10',
  'standard', 'kid',
  'student', 'student',
  'standard', 'standard',
  'End', 'Scary Movie',
  '6', 'student',
  'student', 'student',
  'student', 'student',
  'student', 'Finish'
]
)