//importing the module music

var music = require('./music') //the ./ is necessary to specify the path as only core modules are imported without the ./
music.handOfGod()

//importing module movies
var movies = require('./movies')
movies.movie_1()
movies.movie_2()
console.log(movies.actionMovie)

//importing abimbola and adegoke
require('./abimbola')
require('./adegoke')

/*this will pass the same favMovie value for abimbola and adegoke even tho adegoke didn't set
favorite movie
they're sharing the same version or copy of the movie.js module
*/

/* the module cities uses an Object Factory which allows all other modules to have a copy of the
cities module
 */