// Traditional Approach

class Solution{
    duplicateCheck(str){
        //code here
        let temp = ''+ str[0];
        for(let i=0;i<str.length;i++){
            if(temp.indexOf(str[i]) == -1){
                temp = temp+str[i];
            }
        }
        return temp;
    }
}

// Optimized Approach

class Solution{
    duplicateCheck(str){
        const p=new Set(str);
        const t=[...p];
        return t.join("");
    }
}

// Provide your comparison here.
1. The optimized approach using a Set data structure, which is designed for fast lookups and does not allow duplicates.
    In contrast, the traditional approach uses a string concatenation operation within a loop, which can be less efficient,
    especially for larger strings. The Set approach typically has better time complexity for removing duplicates compared to
    the traditional approach.
2. The optimized approach is easier to understand. It directly conveys the intention of removing duplicates
    using a Set, followed by converting it back to an array and then to a string. This makes the code more readable and maintainable 
    compared to the traditional approach, which involves manual checks for duplicates within a loop.
3. The optimized approach is likely to perform better as the size of the input string increases. The use of a Set allows for 
    efficient removal of duplicates regardless of the size of the input, whereas the traditional approach's performance could
    degrade significantly for larger input due to its looping mechanism.
