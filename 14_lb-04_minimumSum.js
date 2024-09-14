module.exports = { minimumSum };

function minimumSum(num) {
    // Write your code inside this function only.
const arr = num.toString().split().sort();
    return parseInt(arr[0] + arr[2]) + parseInt(arr[1] + arr[3]);
}