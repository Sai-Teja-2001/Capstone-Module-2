// Worst Case

function worstmaxBitwise(arr) {
    // Write your code inside this function only.
let maxAnd = -Infinity; // Initialize maximum bitwise AND value to negative infinity

  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
        const currentAnd = arr[i] & arr[j];
        maxAnd = Math.max(maxAnd,currentAnd);
    }
  }
  return maxAnd;

}

// Best Case

function bestmaxBitwise(arr) {
    // Write your code inside this function only.
 arr.sort((a, b) => b - a); // Sort array in non-ascending order
    let maxAnd = 0; // Initialize maximum bitwise AND value to 0

    // Iterate through each bit position (starting from the most significant bit)
    for (let i = 31; i >= 0; i--) {
        let mask = 1 << i; // Create a mask for the ith bit

        // Set the ith bit in maxAnd if it doesn't exceed the current result
        let currentAnd = maxAnd | mask;

        // Iterate through the array to check if the current bit can be set for any pair
        for (const num of arr) {
            if ((num & currentAnd) === currentAnd) {
                maxAnd = currentAnd;
                break;
            }
        }
    }

    return maxAnd; // Return the maximum bitwise AND value found

}