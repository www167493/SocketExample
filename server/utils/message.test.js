var expect = require('chai').expect;

var assert = require('chai').assert;

var {generateMessage, generateLocationMessage} = require('./message');


describe('generateMessage', ()=>{
    it('should generate correct message object', () =>{
        var from = 'Jen';
        var text = 'Some message';
        var message = generateMessage(from, text);

        //expect(message.createAt).to.be.a('number')
        assert.typeOf(message.createAt, 'number');
        expect(message).include({from, text})
    })
})

describe('generateLocationMessage',()=>{
    it('should generate correct location object', ()=>{
        var from ='Deb';
        var latitude= 15;
        var longtitude = 19;
        var url = 'https://www.google.com/maps?q=15,19';
        var message = generateLocationMessage(from, latitude, longtitude)

        expect(message.createAt).to.be.a('number');
        expect(message).include({from, url});
    });
});