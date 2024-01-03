// Importing the http module 
const http = require("http");

// Defining the port
const port = 3000;

// Creating server  
const server = http.createServer((req, res) => {
    // Sending the response 
    res.write("Hello World, This is Node-js app");
    res.end();
});

// Server listening to port 3000 
server.listen(port, function () {
    // Logging to console
    console.log(`Todolist running on http://0.0.0.0:${port}`);
});



