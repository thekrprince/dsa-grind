// LC 189 - Rotate Array - https://leetcode.com/problems/rotate-array/description/

function rotateArray(nums, k) {
    let i = 0;

    function reverse(i, j) {
        while (i < j) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
            j--;
        }
    }

    reverse(i, nums.length - 1);
    reverse(i, k - 1);
    reverse(k, nums.length - 1);

    console.log(nums);
}

rotateArray([1, 2, 3, 4, 5, 6, 7], 3);
rotateArray([-1, -100, 3, 99], 2);