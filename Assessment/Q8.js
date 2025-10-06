// Modify a Node.js HTTP server to handle routes: 
//  / → Display “Home Page” 
//  /about → Display “About Page”  
//  Any other URL → Display “404 Page Not Found”

const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Home Page');
  } else if (req.url === '/about') {
    res.end('About Page');
  } else {
    res.end('404 Page Not Found');
  }
});
server.listen(3000, () => {
  console.log('Server running');
});
