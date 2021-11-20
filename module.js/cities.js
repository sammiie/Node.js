// To demonstrate Object factory

module.exports = function cities(){
    return{
        favCity: ""
    }
}

//This allows each module have a separate copy of this module when they import it