module.exports = { maxCount };

function maxCount(nums) {
    // Write your code inside this function only.
 let pos = 0;
  let neg = 0;
  let maxCount = 0;

  nums.forEach((element) => {
    if (element > 0) {
      pos++;
    } else if (element < 0) {
      neg++;
    }
  });

  return pos >= neg ? pos : neg;

}