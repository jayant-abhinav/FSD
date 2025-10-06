// Create a Module & Import It  
// Create a module math.js that exports a function multiply(a, b). 
// In another file app.js, import the module and call multiply(5, 6) and print the result.
const multiply = require('./math')

const result = multiply(5, 6);
console.log(result);