const express=require("express")
const app=express()
const data=require("./data")
app.use(express.json())
app.get("/Student",(req,res)=>{
    res.send(data.Student)   

res.json({
    msg:"data successfully ok",
    data:data.Student,
    time:new Date().toLocaleString()
})        
})
app.post("/users",(req,res)=>{
    const new_data=req.body
    data.users.push(new_data)
    res.json({
        msg:"data successfully load",
        data:data.users
    })
})
app.listen(6002,()=>{
    console.log("server started")
})