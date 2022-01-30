const express = require("express"); //require the Express library
const app = express(); //create the app to use Express
const server = app.listen(4000); //listen on port 3000
app.use(express.static("public"));//want the public to be able to see when the public goes to my web server
console.log("It works");//Print "It works" when the server is running

var socket = require('socket.io');//require the socket.io

var io = socket(server);//keep track of inputs and outputs, messages in and out

// Register a callback function to run when we have an individual connection
// This is run for each individual user that connects
io.sockets.on('connection', newConnection);//set up a connection event

function newConnection(socket) {
    console.log('We have a new client: ' + socket.id);//every single new connection to a webserver gets autoatically assigned an ID number for tracking it over time
    
    // When this user emits, client side: socket.emit('otherevent',some data);
    socket.on('mouse', mouseMsg);//receive data of 'mouse'

    function mouseMsg(data) {//what is the function of the 'data' in brackets?
        // Data comes in as whatever was sent, including objects
        console.log(data);

        socket.broadcast.emit('mouse', data);//send back out the same message, and call it 'mouse'
        // This is a way to send to everyone including sender
        // io.sockets.emit('message', "this goes to everyone");
        
    }
}