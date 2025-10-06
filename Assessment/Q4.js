//Create a simple Node.js server using the http module that responds with
// “Hello Node.js” when opened in the browser on port 3000
const server =require("http")
server.createServer((req, res)=>{
    res.write("<h1>Hello Node.js</h1>")

    res.end("")
}).listen(3000, ()=>{
    console.log("Server Started")
})
 