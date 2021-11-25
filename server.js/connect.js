/* To use the connect framework
we need to install the module first
steps
1. go to terminal
2. npm install connect
 */

var connect = require('connect') //importing connect module
var http = require('http') //importing core module "http"
var fs = require('fs') //importing file system

var app = connect()



//404 Response
function notFoundResponse(response){
    response.writeHead(404, {"Content-Type": "text/plain"})
    response.write("Error 404: Page Not found!")
    response.end()
}

//Handle user request
function about(request, response){

    if (request.method == 'GET' && request.url == '/about' ){
        response.writeHead(200, {"Content-Type": "text/html"}) //"text/html" indicate we are sending a file not a text
        fs.createReadStream("./about.html").pipe(response)
    }else{
        notFoundResponse(response)
    }
}

function profile(request, response){

    if (request.method == 'GET' && request.url == '/profile' ){
        response.writeHead(200, {"Content-Type": "text/html"}) //"text/html" indicate we are sending a file not a text
        fs.createReadStream("./profile.html").pipe(response)
    }else{
        notFoundResponse(response)
    }
}



/*
function about(request, response){
    console.log("About was visited")
}

function profile(request, response){
    console.log("Profile was visited")
}

*/
app.use('/profile', profile)
app.use('/about', about)

http.createServer(app).listen(8088)
