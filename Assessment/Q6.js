//Write a Node.js program  to create an API endpoint: 
// URL: http://localhost:5000/user  
// Method: GET
// Response: { "name": "Amit", "age": 25 } (in JSON format)

const express  = require("express")
const app = express()

app.get("/user", (req, res)=>{
  const userData = {
    "name": "Amit",
    "age": 25
  };

  res.json(userData)
});

app.listen(5000, () => {
  console.log("Server Started")
});