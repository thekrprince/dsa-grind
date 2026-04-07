function findLargestNum(nums) {
    let largest = -Infinity;

    for (let num of nums) {
        if (num > largest) {
            largest = num;
        }
    }

    return largest;
}

const largestNum = findLargestNum([190, 22, 88, 56, 211, 39]);
console.log(largestNum);