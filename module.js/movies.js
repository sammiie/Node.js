// All codes to be exported are placed inside the module.exports

module.exports = {
    movie_1: function () {
        console.log("A few Good Men: 1995")
    },

    movie_2: function () {
        console.log("Suits: 2011")
    },

    //exporting variables

    actionMovie: "A Good Day to die Hard",
    favMovie: ""
}

// this function is not exported
function movie_3(){
    console.log("Mad Men: 2007")
}