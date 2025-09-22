const mongoose=require("mongoose")
async function connectDB()
{
    try{
await mongoose.connect(
    "mongodb+srv://16jkumar_db_user:yRKBGdOQsLKf3JqF@jayantdb.hn7cmlw.mongodb.net/?retryWrites=true&w=majority&appName=JayantDB"
)
console.log("mongodb connect")
    }
    catch(err)
    {
console.log("db connect failed",err)
    }
}
module.exports = connectDB;