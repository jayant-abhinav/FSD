const server = require("http")
const users=[
    {"id":1, "name":"Jayant"},
    {"id":2, "name":"Ishmeet"},
    {"id":3, "name":"Lakshy"}
]
server.createServer((req, res)=>{
    if(req.url==="/") {
        res.write("<h1>Home Page</h1>")
    }else {
        if(req.url==="/users") {
            res.write(JSON.stringify(users))
        } else {
            res.write("<h1>404 page not found</h1>")
        }
    }
    res.end("")
}).listen(5000, ()=>{
    console.log("Server Started")
})