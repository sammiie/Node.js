function User () {
    this.name = ""
    this.life = 100
    this.giveLife = function (targetPlayer) {
        targetPlayer.life += 1
        console.log(this.name + " gave 1 life to " + targetPlayer.name)
    }
}

var Rob = new User()
var Ted = new User()

Rob.name = "Rob"
Ted.name = "Ted"

Rob.giveLife(Ted)
console.log("Rob: " + Rob.life)
console.log("Ted: " + Ted.life)

//Adding function to all objects using prototyping

User.prototype.kick = function kick(targetPlayer) {
    targetPlayer.life -= 5
    console.log(this.name + " kicked " + targetPlayer.name)
}

Ted.kick(Rob)
console.log("Rob: " + Rob.life)
console.log("Ted: " + Ted.life)

//You can add properties to all objects
User.prototype.magic = 60

console.log("Rob Magic: " + Rob.magic)
console.log("Ted Magic: " + Ted.magic)