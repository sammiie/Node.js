var movies = require('./movies')
console.log("Adegoke's favourite movie is " + movies.favMovie)

var cities = require('./cities')
var adegokeCity = cities()
console.log("Adegoke's favorite city is " + adegokeCity.favCity)

/* in this case adegoke's favorite city is not set so a blank will be returned instead of referencing what Abimbola
specified
 */