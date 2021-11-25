var movies = require('./movies')
movies.favMovie = "Blackish"
console.log("Abimbola's favourite movie is " + movies.favMovie)

var cities = require('./cities') //importing module cities
var abimbolaCity = cities() //assigning a variable to the imported module
var party = require('./var-export') // importing the variables from var-export

abimbolaCity.favCity = "Paris"
abimbolaCity.party_info = party.party_day + " " + party.party_time //using the imported variable with object in cities
console.log("Abimbola's favorite city is " + abimbolaCity.favCity)
console.log("Abimbola is partying " + abimbolaCity.party_info)


