const expect = require('chai').expect;


const {isRealString} = require('./validation.js')

describe('isRealString',()=>{
    it('should only accept String input', ()=>{
        var x = isRealString(98)

        expect(x).equal(false)
    })

    it('should reject input with only space', ()=>{
        var x = isRealString(' ')

        expect(x).equal(false)
    })

    it('should accept input with space between String',()=>{
        var x = isRealString('we ewrt');

        expect(x).equal(true)
    })
})