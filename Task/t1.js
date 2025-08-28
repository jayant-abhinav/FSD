//wap to append "Hello Node.js" in a file and read it
const fs = require("fs")
fs.writeFileSync("txt.txt", "This is text of text file. ")

const data = fs.readFileSync("txt.txt", "utf-8")
console.log(data)

fs.appendFile("txt.txt", "Hello Node.js", (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});
const data1 = fs.readFileSync("txt.txt", "utf-8")
console.log(data1)

