// Traditional Approach

function chunkArrayInGroups(arr, size) {
  let temp = [];
  const result = [];

  for (let a = 0; a < arr.length; a++) {
    if (a % size !== size - 1) temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0) result.push(temp);
  return result;
}

// Optimized Approach

function chunkArrayInGroups(arr, size) {
  // Break it up.
  const newArr = [];
  let i = 0;

  while (i < arr.length) {
    newArr.push(arr.slice(i, i + size));
    i += size;
  }
  return newArr;
}



// Provide your comparison here.
1. The optimized appraoch is more concise and has less lines of code.
2. It do not uses an extra temp array for each chunk.
3. The use of slice() method simplifies the process of chunk extraction cause of that code is more readable.
4. Optimized appraoch will perform better especially with larger arrays compare to traditional way because it avoids the unnecessary array manipulations.
