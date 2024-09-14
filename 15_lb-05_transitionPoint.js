module.exports = { transitionPoint };

function transitionPoint(arr) {
    // Write your code inside this function only.
  let l = 0;
  let r = arr.length - 1;
  let ans = -1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] == 0) {
      l = mid + 1;
    } else {
      ans = mid;
      r = mid - 1;
    }
  }
  return ans;
}