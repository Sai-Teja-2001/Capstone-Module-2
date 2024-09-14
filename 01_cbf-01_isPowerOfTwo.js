module.exports = { isPowerOfTwo };

/*function isPowerOfTwo(n) {
    
    return n > 0 || (n & (n - 1)) === 0;
}
*/

//Correcected code
function isPowerOfTwo(n) {
    
    return n > 0 && (n & (n - 1)) === 0;
}
//Function returns whether a function is a power of 2 or not
    
