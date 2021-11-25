function music1() {
    console.log("Hand of God: Jon Bellion")
}

function music2(){
    console.log("Heaven: Kean Brown")
}

/* To make use of this file in the app.js,
we need to export it here first.
then import it in the app.js file

we can specify which code to export
 */




//export one of the functions
module.exports.handOfGod = music1

