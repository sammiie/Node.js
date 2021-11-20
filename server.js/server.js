var http = require('http') //importing core module "http"
var fs = require('fs') //importing file system

//404 Response
function notFoundResponse(response){
    response.writeHead(404, {"Content-Type": "text/plain"})
    response.write("Error 404: Page Not found!")
    response.end()
}

//Handle user request
function onRequest(request, response){

    if (request.method == 'GET' && request.url == '/' ){
        response.writeHead(200, {"Content-Type": "text/html"}) //"text/html" indicate we are sending a file not a text
        fs.createReadStream("./index.html").pipe(response)
    }else{
        notFoundResponse(response)
    }
}

http.createServer(onRequest).listen(8888)
