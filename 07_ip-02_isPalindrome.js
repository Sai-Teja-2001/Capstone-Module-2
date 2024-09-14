module.exports = { isPalindrome };

/* function isPalindrome(n) {
    let dupNum = 0;
    let backN = n;
    
    while (n) {
        let rem = n % 10;
        dupNum = dupNum * 10 + rem;
        n = Math.floor(n / 10);
    }
    
    if (dupNum === backN) {
        return true;
    }
    
    return false;
} */

//Improvised approach using Two pointer
function isPalindrome(n) {
  let strNum = String(n);
  let left = 0;
  let right = strNum.length - 1;

  while (left < right) {
    if (strNum[left] !== strNum[right]) {
      return false; // Characters don't match, not a palindrome
    }
    left++;
    right--;
  }

  return true;
}
