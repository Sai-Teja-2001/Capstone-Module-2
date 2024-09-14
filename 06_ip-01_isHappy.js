module.exports = { isHappy };

/* function isHappy(n) {
    // Helper function to calculate the sum of squares of digits
    function calculateSumOfSquares(num) {
        let sum = 0;
        while (num > 0) {
            const digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        return sum;
    }

    let slow = n;
    let fast = n;

    do {
        slow = calculateSumOfSquares(slow);
        fast = calculateSumOfSquares(calculateSumOfSquares(fast));
    } while (slow !== fast);

    return slow === 1;
} */

// Improvised Approach
function isHappy(n) {
    function calculateSumOfSquares(num) {
        let sum = 0;
        while (num > 0) {
            const digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        return sum;
    }

    let seenNumbers = new Set();

    while (n !== 1 && !seenNumbers.has(n)) {
        seenNumbers.add(n);
        n = calculateSumOfSquares(n);
    }

    return n === 1;
}
