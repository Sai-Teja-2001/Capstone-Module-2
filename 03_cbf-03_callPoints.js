module.exports = { callPoints };

function callPoints(operations) {
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === "+") {
            let sum = (parseInt(operations[i - 2]) || 0) + (parseInt(operations[i - 1]) || 0);
            operations[i] = sum;
        } else if (operations[i] === "D") {
            let newD = (parseInt(operations[i - 1]) || 0) * 2;
            operations[i] = newD;
        } else if (operations[i] === "C") {
            operations.splice(i - 1, 2);
            i = i - 2;
        } else {
            var integer = parseInt(operations[i]);
            operations[i] = integer;
        }
    }

    // to calculate the totalSum only
    let totalSum = 0;
    for (let i = 0; i < operations.length; i++) {
        totalSum += operations[i];
    }

    return totalSum;
}
//Changed var integer = +operations[i]; to var integer = parseInt(operations[i]);