const express=require("express")

const {User}=require("./model")
const connectDB = require("./db")

const app=express()
app.use(express.json())
//connect to db
connectDB()
app.post("/users",async(req,res)=>{
try{
const user=new User(req.body)
await user.save()
res.json({
    message:"successful loaded",
    data:user
})
}
catch(err){
    res.json({
        message:"not successful"
    })

}
})
app.listen(4000,()=>{
console.log("server running at port 4000")
})