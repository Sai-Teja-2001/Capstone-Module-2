module.exports = { searchRange };

/*function searchRange(nums, target) {
    //O(n) approach

    var ans=[];
    for(let i=0;i<nums.length;i++){
      if(nums[i]==target){
          ans.push(i);
          break;
      }
    }
 for(let i=nums.length-1;i>=0;i--){
      if(nums[i]==target){
          ans.push(i);
          break;
      }
    }
if(ans.length==0){
ans.push(-1);
ans.push(-1);
}
    return ans;
};*/

//Improvised approach
function searchRange(nums, target) {
    // Helper function to find the first occurrence of the target
    function findFirst(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        let result = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                result = mid;
                right = mid - 1; // Keep searching on the left side
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    }

    // Helper function to find the last occurrence of the target
    function findLast(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        let result = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                result = mid;
                left = mid + 1; // Keep searching on the right side
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    }

    // Find the first and last occurrences using the helper functions
    let first = findFirst(nums, target);
    let last = findLast(nums, target);

    // If the target is not found, return [-1, -1]
    if (first === -1) {
        return [-1, -1];
    }

    return [first, last];
};
