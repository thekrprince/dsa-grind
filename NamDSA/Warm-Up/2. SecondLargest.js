// Find the second largest number in an Array

// Pseudo Code
// Take two variables to store the first and second largest and assign both with -Infinity
// Run the array through loop

function findSecondLargest(nums) {
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for (let num of nums) {
        if (num > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = num;
        } else if (num > secondLargest) {
            secondLargest = num;
        }
    }

    return secondLargest;
}

const secondLargest = findSecondLargest([5, 2, 4, 8, 7]);
console.log(secondLargest);