function oldBooks(input) {
let favoriteBook = input.shift();
let numberOfBooks = Number(input.shift());
let counter = 0;
let bookFound = false;

while (counter < numberOfBooks) {
    book = input.shift();
    if(favoriteBook === book) {
        bookFound = true;
        break;
    }
counter++;
}

if(bookFound == true) {
    console.log(`You checked ${counter} books and found it.`)
} else {
    console.log('The book you search is not here!')
    console.log(`You checked ${numberOfBooks} books.`)
}
}


oldBooks([ 'Troy', '8', 'Stronger', 'Life Style', 'Troy', '' ])
