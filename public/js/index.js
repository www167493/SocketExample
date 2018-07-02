var socket = io();

socket.on('connect', function(){
    console.log('Connected to A Sercer');

    socket.emit('createdEmail',{
        to: 'polymore@m.com',
        text:'hahaha'
    });
});

socket.on('disconnect', function(){
    console.log('Disconnected from Server')
})

socket.on('newEmail', function(email){
    console.log('You got mail', email)
})