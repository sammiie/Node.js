// GLOBALS

// __dirname  - path to current directory
// __filename - file name
// require - function to use modules (commonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

console.log("This is the directory path: " + __dirname)
console.log("This is the filename: " + __filename)

setInterval(function(){
    console.log("Hello")
}, 1000)

//or

setInterval(() => {
    console.log("Another way to write it.")
}, 2000)