//creating server in nodejs with home, about and contact
const server =require("http")

server.createServer((req, res)=>{
    // res.write("<h1>This is my homepage</h1>")
    if (req.url==="/") {
        res.write("<h1>This is my homepage</h1>")
    }
    else{
        if (req.url==="/about") {
            res.write("<h1>This is my about page</h1>")
        } else if(req.url==="/contact"){
            res.write("<h1>Contact Us: contactus@gmail.com</h1>")
        }
        else{
            res.write("<h1>404 page not found</h1>")
        }
    }   
    res.end("")
}).listen(3000,()=>{
    console.log("server started")
})