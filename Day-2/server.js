//creating server in nodejs
const server =require("http")

server.createServer((req, res)=>{
    // res.write("<h1>This is my homepage</h1>")
    if (req.url==="/") {
        res.write("<h1>This is my homepage</h1>")
    }
    else{
        if (req.url==="/about") {
            res.write("<h1>This is about page</h1>")
        } else {
            res.write("<h1>404 page not found</h1>")
        }
    }   
    res.end("")
}).listen(5001,()=>{
    console.log("server started")
})