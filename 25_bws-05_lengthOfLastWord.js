// Worst Case

function lengthOfLastWord(s) {
    // Step 1: Strip trailing spaces
    s = s.trim();
    
    // Step 2: Split the string by spaces
    const words = s.split(' ');
    
    // Step 3: Get the last word and its length
    const lastWord = words[words.length - 1];
    return lastWord.length;
}


// Best Case

function lengthOfLastWord(s) {
    // Assume s is well-formed: no leading/trailing/multiple spaces
    const words = s.split(' ');
    
    // Get the last word and its length
    const lastWord = words[words.length - 1];
    return lastWord.length;
}