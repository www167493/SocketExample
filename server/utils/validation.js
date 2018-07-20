
var isRealString = (str) =>{
    return typeof str ==='string' && str.trim().length >0
}

// console.log(isRealString(23))

module.exports ={isRealString}