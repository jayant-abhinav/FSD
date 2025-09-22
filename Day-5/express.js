const express=require("express")
const app=express()
const data=require("search")

app.get("/user/:id",(req,res)=>{
   const id= parseInt(req.params.id)
   const user=data.users.find(u=>u.id===id)
   if(user){
    res.json({
        message:"successfuly find",
        data:user
    })
   }
   else{
    res.json({
        message:"not found",
        status:404
    })
   }
})