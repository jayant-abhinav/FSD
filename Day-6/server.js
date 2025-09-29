const express=require("express")

const {User}=require("./model")
const connectDB = require("./db")

const app=express()
app.use(express.json())
//connect to db
connectDB()
app.post("/user",async(req,res)=>{
   try{
const user=new User(req.body)
await user.save()
res.json({
    message:"data successfuly loaded",
    data:user
})
   }
   catch(err)
   {
    console.log(err)
   }

})
app.get("/user",async(req,res)=>{
    try{
const user=await User.find()
res.json({
    data:user
})
    }
    catch(err)
    {
        console.log(err)
    }

})
app.listen(4000,()=>{
console.log("server running at port 4000")
})