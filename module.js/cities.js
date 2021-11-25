// To demonstrate Object factory

module.exports = function cities(){
    return{
        favCity: "",
        party_info: ""
    }
}

//This allows each module have a separate copy of this module when they import it
// the return{} helps to achieve that