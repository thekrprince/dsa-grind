// LC 209. Minimum Size Subarray Sum

function minSubArrayLen(nums, target) {
    let min = Number.MAX_VALUE;
    let i = 0;
    let j = 0;
    let sum = 0;

    while (j < nums.length) {
        sum += nums[j];

        if (sum < target) {
            j++;
        } else {
            while (sum >= target) {
                min = Math.min(min, j - i + 1);
                sum -= nums[i];
                i++;
            }
            j++;
        }
    }

    return min === Number.MAX_VALUE ? 0 : min;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 4));
console.log(minSubArrayLen([1, 1, 1, 1, 1, 1, 1, 1], 11));