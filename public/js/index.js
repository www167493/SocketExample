var socket = io();

socket.on('connect', function(){
    console.log('Connected to A Sercer');

    // socket.emit('createMessage',{
    //     from:'BIg Daddy',
    //     text:'morning'
    // });
});

socket.on('disconnect', function(){
    console.log('Disconnected from Server')
})

socket.on('newMessage',function(message){
    console.log('newMessage',message)
})

socket.emit('createMessage',{
    from:'Lumpy',
    text: 'High'
},function(data){
    console.log('A message is created',data)
})