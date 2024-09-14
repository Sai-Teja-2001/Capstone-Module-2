module.exports = { nextGreatestLetter };

/*function nextGreatestLetter(letters, target) {
    // binary search

    let ans;
    let check = false;

    let l = 0;
    let size = letters.length;
    let h = size - 1;

    while (l <= h) {
        let mid = h - Math.floor((h - l) / 2);

        if (letters[mid] <= target) {
            l = mid + 1;
        } else {
            let currAns = letters[mid];
            check = true;
            if (mid >= 0) {
                h = mid - 1;
            }
            ans = currAns;
        }
    }
    
    if (!check) {
        return letters[0];
    }
    
    return ans;
}*/

//Approach by using Set

function nextGreatestLetter(letters, target) {
    const letterSet = new Set(letters);

    for (const letter of letterSet) {
        if(letter>target){
            return letter;
        }
    }
//return the first letter of the set
    return letterSet.values().next().value;
}