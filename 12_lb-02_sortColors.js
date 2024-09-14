module.exports = { sortColors };

function sortColors(nums) {
    // Write your code inside this function only.
  //Initialize pointers
  let redPtr = 0;
  let whitePtr = 0;
  let bluePtr = nums.length - 1;

  //Iterate through array
  while (whitePtr <= bluePtr) {
    if (nums[whitePtr] === 0) {
      [nums[whitePtr], nums[redPtr]] = [nums[redPtr], nums[whitePtr]];
      whitePtr++;
      redPtr++;
    } else if (nums[whitePtr] === 1) {
      whitePtr++;
    } else {
      [nums[whitePtr], nums[bluePtr]] = [nums[bluePtr], nums[whitePtr]];
      bluePtr--;
    }
  }
  return nums;

}