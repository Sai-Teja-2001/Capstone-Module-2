// Traditional Approach

function enchantedArrayShuffling(originalArray) {
  const sortedArray = [...originalArray].sort((a, b) => a - b);
  const shuffledArray = [];

  let left = 0;
  let right = sortedArray.length - 1;

  while (left <= right) {
    if (left === right) {
      shuffledArray.push(sortedArray[left]);
    } else {
      shuffledArray.push(sortedArray[left]);
      shuffledArray.push(sortedArray[right]);
    }

    left++;
    right--;
  }

  return shuffledArray;
}

// Optimized Approach

function enchantedArrayShuffling(originalArray) {
  const sortedArray = [...originalArray].sort((a, b) => a - b);
  const shuffledArray = [];

  let left = 0;
  let right = sortedArray.length - 1;

  while (left < right) {
    shuffledArray.push(sortedArray[left++]);
    shuffledArray.push(sortedArray[right--]);
  }

  if (left === right) {
    shuffledArray.push(sortedArray[left]);
  }

  return shuffledArray;
}



// Provide your comparison here.
1. Both approaches follow a similar logic of iterating over the array using pointers left and right, then pushing elements
into the shuffledArray.
2. The optimized approach reduces the number of conditional checks inside the loop by immediately pushing elements without 
separate checks for equality.
3. Both approaches have the same time complexity in terms of array traversal, but the optimized approach may perform slightly 
better due to the reduced number of conditional checks.
4. In summary, the optimized approach improves upon the traditional approach by streamlining the process of pushing elements
into the shuffledArray, resulting in a more concise and potentially more efficient solution


