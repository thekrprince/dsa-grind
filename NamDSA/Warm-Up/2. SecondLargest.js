// Find the second largest number in an Array

// Pseudo Code
// Take two variables to store the first and second largest and assign both with -Infinity
// Run the array through loop
// Check if the num is greater than firstLargest
// If yes, then assign the firstLargest to secondLargest first, then assign the current val to firstLargest
// Else if the num is not greater than firstLargest, it can be greater than secondLargest
// In this case, assign the num to the secondLargest.

function findSecondLargest(nums) {
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for (let num of nums) {
        if (num > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = num;
        } else if (num < firstLargest && num > secondLargest) {
            secondLargest = num;
        }
    }

    return secondLargest;
}

const secondLargest = findSecondLargest([5, 2, 4, 8, 7]);
console.log(secondLargest);

const secondLargest1 = findSecondLargest([55, 22, 44, 88, 22, 88, 77]);
console.log(secondLargest1);