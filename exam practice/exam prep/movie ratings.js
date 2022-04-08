function movieRatings(input) {
    let n = Number(input.shift());
    let min = Number.MAX_SAFE_INTEGER;
    let minFilmName = '';
    let max = Number.MIN_SAFE_INTEGER;
    let maxFilmName = '';
    let averageRating = 0;
    for(let i = 0; i < n; i++) {
        let filmName = input.shift();
        let rating = Number(input.shift());
        averageRating += rating;
        if (rating > max) {
            maxFilmName = filmName;
            max = rating;
        }
        if (rating < min) {
            minFilmName = filmName;
            min = rating;
        }
    }
console.log(`${maxFilmName} is with highest rating: ${max.toFixed(1)}`);
console.log(`${minFilmName} is with lowest rating: ${min.toFixed(1)}`);
console.log(`Average rating: ${(averageRating/n).toFixed(1)}`)
}

movieRatings(['5', 'A Star is Born', '7.8', 'Creed 2', '7.3', 'Mary Poppins', '7.2', 'Vice', '7.2', 'Captain Marvel', '7.1'])