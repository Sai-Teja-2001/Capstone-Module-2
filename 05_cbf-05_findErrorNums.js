module.exports = { findErrorNums };

function findErrorNums(nums) {
    const hashmap = new Map();
    let output = [];
    let maxValue = nums.length;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (hashmap.has(num)) {
            output.push(num);
        }
        hashmap.set(num, i);
    }

    for (let i = 1; i <= maxValue; i++) {
        if (!hashmap.has(i)) {
            output.push(i);
            break;
        }
    } 

    return output;
}

//maxValue should be length of nums because we are looking for a missing number in the range [1, n] where n is the length of the array.