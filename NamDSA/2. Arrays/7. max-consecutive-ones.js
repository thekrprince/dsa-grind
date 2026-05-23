// LC 485. Max Consecutive Ones

function findMaxConsecutiveOnes(nums) {
    let currentCount = 0;
    let maxConsecutiveOnes = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            currentCount++;
        } else {
            maxConsecutiveOnes = Math.max(maxConsecutiveOnes, currentCount);
            currentCount = 0;
        }
    }

    return Math.max(currentCount, maxConsecutiveOnes);
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // 3
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])); // 2
console.log(findMaxConsecutiveOnes([0, 0, 1, 1, 1])); // 3
console.log(findMaxConsecutiveOnes([0, 0, 0])); // 0