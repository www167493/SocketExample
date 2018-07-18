var socket = io();

socket.on('connect', function(){
    console.log('Connected to A Sercer');
});

socket.on('disconnect', function(){
    console.log('Disconnected from Server')
})

socket.on('newMessage',function(message){
    var formattedtime = moment(message.createdAt).format('h:mm a');
    var template = jQuery('#message-template').html();
    var html = Mustache.render(template,{
        text:message.text,
        user: message.from,
        timestamp: formattedtime
    });

    jQuery('#messages').append(html);



    /* Orginal Script*/ 
    // console.log('newMessage',message)
    // var li = jQuery('<li></li>');
    // li.text(`${message.from} ${formattedtime}: ${message.text}`);

    // jQuery('#messages').append(li);
});

socket.on('newLocationMessage', function(message){
    var formattedtime = moment(message.createdAt).format('h:mm a');
    var template = jQuery('#location-message-template').html();
    var html = Mustache.render(template,{
        url: message.url,
        user: message.from,
        timestamp: formattedtime
    })

    jQuery('#messages').append(html);
    // var li=jQuery('<li></li>');
    // var a =jQuery('<a target="_black">My Current location</a>');

    // li.text(`${message.from} ${formattedtime}: `);
    // a.attr('href', message.url);


    // li.append(a);
    // jQuery('#messages').append(li);
})

jQuery('#message-form').on('submit', function(e){
    e.preventDefault();

    var messageTextbox = jQuery('[name=message]')
    
    socket.emit('createMessage',{
        from: 'User',
        text: messageTextbox.val()
    },function(){
        messageTextbox.val('')

    });
});

//get Geolocation
var locationButton = jQuery('#send-location');
locationButton.on('click', function(){
    if(!navigator.geolocation){
        return alert('Geolocation not supported by your browser.')
    }

    locationButton.attr('disabled','disabled').text('Sending location....');

    navigator.geolocation.getCurrentPosition(function(position){
        locationButton.removeAttr('disabled').text('Send location');
        socket.emit('createLocationMessage',{
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
    }, function(){
        locationButton.removeAttr('disabled');
        alert('Unable to fetch location.');
    })
})