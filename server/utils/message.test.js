var expect = require('chai').expect;

var assert = require('chai').assert;

var {generateMessage} = require('./message');


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