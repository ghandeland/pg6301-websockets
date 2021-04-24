const { Socket } = require('dgram');
const express = require('express');
const { Server } = require('http');
const path = require('path')
const ws = require('ws')
const app = express();
const bodyParser = require('body-parser');
const profile = require("./profile")




// Store sockets
const sockets = [];
const wss = new ws.Server({ noServer: true });
wss.on("connection", (socket) => {
    sockets.push(socket)
    socket.on("message", (msg) => {
        const message = JSON.parse(msg);
        console.log("Message: ", msg);
        
        sockets.map(s => s.send(JSON.stringify(message)));
    });
});

app.use(profile);


// Set up static folder
app.use(express.static(path.resolve('__dir', '..', 'dist')))

// Server side rendering
app.use((req, res, next) => res.sendFile(path.resolve('__dir', '..', 'dist', 'index.html')));

const port = process.env.port || 3000;
const server = app.listen(port, () => {
    console.log(`Server started on port ${port}`);
    
    server.on("upgrade", (req, socket, head) => {
        wss.handleUpgrade(req, socket, head, (socket) => {
            wss.emit("connection", socket, req);
        }) 
    });
})