// Traditional Approach

var missingNumber = function(arr) {
    let n=arr.length;
     let hashSet = new Set();
 
  // Add all elements of array to hashset
  for (let i = 0; i < n ; i++) {
    hashSet.add(arr[i]);
  }
 
  // Check each integer from 1 to n
  for (let i = 1; i <= n; i++) {
    // If integer is not in hashset, it is the missing integer
    if (!hashSet.has(i)) {
      return i;
    }
  }
 
  // If no integer is missing, return n+1
  return 0;
};

// Optimized Approach

var missingNumber = function(arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        while (arr[i] > 0 && arr[i] <= n && arr[arr[i] - 1] !== arr[i]) {
            [arr[arr[i] - 1], arr[i]] = [arr[i], arr[arr[i] - 1]];
        }
    }

    for (let i = 0; i < n; i++) {
        if (arr[i] !== i + 1) {
            return i + 1;
        }
    }
    return n + 1;
};


// Provide your comparison here.
1. In ooptimized approach we do not need to initialise set.
2. Cyclic sort is used to sort the array which is harder to understand.
3.  Array desructuring is used to place numbers to their correct position.
4. Hence The optimized approach is better because it does the job in a simpler and faster way. It sorts the array and 
looks for the missing number at the same time. This makes it faster than the traditional way, which first puts the numbers
into a special list and then looks for the missing one. Plus, the optimized way uses less memory because it doesn't need 
that special list. So, it's simpler, faster, and more efficient overall.