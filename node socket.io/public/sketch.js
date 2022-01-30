var socket;

function setup() {
    createCanvas(600, 400);
    background(51);

    // Start a socket connection to the server
    // Some day we would run this server somewhere else
    socket = io.connect('http://localhost:4000');//create and open a connection to the server that has the socket server on it.

    // We make a named event called 'mouse' and write an
    // anonymous callback function
    socket.on('mouse', newDrawing); //this socket receives a message called newdrawing
}

function newDrawing(data) {
    noStroke();
    fill(255, 0, 100);
    ellipse(data.x, data.y, 20, 20);
}


function mouseDragged() {//why it works when dragging rather than moving
    console.log('Sending: ' + mouseX + ',' + mouseY);

    var data = {
        x: mouseX,
        y: mouseY
    }

    // Send that object to the socket
    socket.emit('mouse', data);//name the message called 'mouse', and attach the data to it.

    noStroke();
    fill(255);
    ellipse(mouseX, mouseY, 20, 20);
}

function draw() {
    //nothing
}