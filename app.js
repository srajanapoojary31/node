//const{Console}=require('console')
const http=require('http')
const server=http.createServer((request,response)=>{
    if(request.url==='/'){
        response.write("welcome to nodejs")
        response.end()
    //console.log("http request")
    }
   else if(request.url==='/about'){
        response.write("welcome to the about page")
        response.end()
    }
    response,writeHead(200,{'content-type':'text/plain'})
    response.write(`<h1>no such page</h1>`)
    response.end()
})
server.listen(5000,()=>{
    console.log("server is running at port 5000")
})
//to stop the continues running press ctrl+c in the output terminal
//to get the output go to google type localhost:5000 hit enter the come to this vs code page there you can see the output in the terminal (for ex:here http request will be displayed)
//then we have to write line number 1,4,5 again save it then go to the chrome again search for the same again hit enter you can see the line "welcome to nodejs" 
//to run the about page in the chrome write "localhost:5000/about"
//line 13 added to display if we search for a not excisting page(for ex:localhost:5000/dij) 


//npm :node package manager