// console.log("This is my first program")

//core module(fs)
// const fs = require("fs")
// fs.writeFileSync("abc.txt", "This is my file.")

// const data = fs.readFileSync("abc.txt", "utf-8")
// console.log(data)

//core module(os)
// const data = require("os")
// console.log(data.platform())

//functions
function add(a,b){
    return a+b
}

function sub(a,b){
    return a-b
}
//creating user-defined module
module.exports={
    add,sub
}