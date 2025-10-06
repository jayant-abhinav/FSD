// Write a Node.js program using the fs module to create a file named message.txt and write the text
// 👉 "Node.js File System Working!"
// inside it. After writing, display a success message on the console.

const fs = require("fs")
const filename = "message.txt"
const message = "Node.js File System Working!"

fs.writeFile(filename, message, (err) => {
    if (err) {
        console.error('Failed to write file:', err)
        return;
    }

    console.log("File created successfullly");
})