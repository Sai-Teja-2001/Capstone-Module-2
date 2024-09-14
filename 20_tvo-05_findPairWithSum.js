// Traditional Approach

function findPairWithSum(array, targetSum) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === targetSum) {
        return [array[i], array[j]];
      }
    }
  }
  return [];
}

// Optimized Approach

function findPairWithSum(array, targetSum) {
  const numMap = {};

  for (let i = 0; i < array.length; i++) {
    const difference = targetSum - array[i];
    if (numMap[array[i]]) {
      return [difference, array[i]];
    }
    numMap[difference] = true;
  }

  return [];
}



// Provide your comparison here.
The optimized approach using a hash map is more efficient, especially for larger arrays,
  due to its linear time complexity O(n). The traditional approach with nested loops becomes increasingly inefficient as 
  the size of the array grows because its time complexity is quadratic.

