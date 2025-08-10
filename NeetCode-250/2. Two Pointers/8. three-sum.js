// LC 15 - 3 Sum

function threeSum(nums) {
    nums.sort((a, b) => a - b);
    let triplets = [];

    for (let i = 0; i <= nums.length; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) {
            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                if (sum === 0) {
                    triplets.push([nums[i], nums[left], nums[right]]);

                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    left++;
                    right--;
                } else if (sum > 0) {
                    right--;
                } else {
                    left++;
                }
            }
        }
    }

    return triplets;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));