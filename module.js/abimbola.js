var movies = require('./movies')
movies.favMovie = "Blackish"
console.log("Abimbola's favourite movie is " + movies.favMovie)

var cities = require('./cities')
var abimbolaCity = cities()
abimbolaCity.favCity = "Paris"
console.log("Abimbola's favorite city is " + abimbolaCity.favCity)