// LC 167 - Two Sum II - Input Array Is Sorted

function twoSum(nums, target) {
    let i = 0;
    let j = nums.length - 1;

    while (i < j) {
        if (nums[i] + nums[j] === target) {
            return [i + 1, j + 1];
        } else if (nums[i] + nums[j] > target) {
            j--;
        } else {
            i++;
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([-1, 0], -1));