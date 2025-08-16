/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {

    let numArray = String(num).split('').map(Number);
    
    for(var i =0; i < numArray.length; i++){
        if(numArray[i]===6){
            numArray[i] = 9;
            let bignum = numArray.join('');
            return Number(bignum)
        }
    }
    return num;
    
};