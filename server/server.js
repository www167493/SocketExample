const path = require('path');
const http = require('http');
const publicPath = path.join(__dirname, '../public');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage, generateLocationMessage} = require('./utils/message.js')
const port= process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server); 

app.use(express.static(publicPath));

io.on('connection', (socket)=>{
    console.log('Incoming User');

    socket.emit('newMessage',generateMessage('Admin', 'Welcome to the app'));

    socket.broadcast.emit('newMessage',generateMessage('Admin','Big Noob Joined '))

    socket.on('createMessage', (message, callback)=>{
        console.log('createMessage', message);

        io.emit('newMessage', generateMessage(message.from, message.text));

        callback('This is from the server');
    })

    socket.on('createLocationMessage',(coords)=>{
        io.emit('newLocationMessage', generateLocationMessage('Admin',coords.latitude,coords.longitude))
    })

    socket.on('disconnect',()=>{
        console.log('User quit')
    })
});


server.listen(port ,()=>{
    console.log(`Server is up on ${port}`)
})
