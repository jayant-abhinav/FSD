const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    name:{
        type:String,require:true
    },
    age:Number,
    email:{
        type:String,
        unique:true
    }
})
const User=mongoose.model("User",userSchema)
module.exports={
    User
}