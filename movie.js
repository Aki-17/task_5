// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
           }
}
let details = new Movie("Jailer", "Sun Pictures", 8)
console.log(details)

//b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
let details1 = new Movie("Jawan", "Red Chillies Entertainment")
console.log(details1)

// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

function getPG(movie) {
    return movie.filter(movie => movie.rating === "PG");
}
let movies = [
    new Movie("RRR", "DVV Entertainment", "PG"),
    new Movie("PS-1", "Columbia Pictures", "R"),
    new Movie("Toy Story", "Pixar", "G"),
    new Movie("The Lion King", "Disney", "PG")
];
let pgMovies = getPG(movies);
console.log(pgMovies)

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

let casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG13");
console.log(casinoRoyale)




