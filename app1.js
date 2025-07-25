const http=require('http')
const {readFileSync}=require('fs')
const read=readFileSync('./app.html')
const server=http.createServer((request,response)=>{
    if(request.url==='/'){
        response.writeHead(200,{'content-type':'text/html'})
        response.write(read)
        response.end()
    }

// else if(request.url==='/about'){
//         response.writeHead(200,{'content-Type':'text/plain'})
//         response.end("Hello,this is the about page")
//         console.log("About page")
// }
// response,writeHead(404,{'content-type':'text/plain'})
//     response.write(`<h2>no such page<h2>,go to homepage<a href ="/">Home page</a>`)
//     response.end()
})
server.listen(3000,()=>{
    console.log("server is running at port 3000")
})
