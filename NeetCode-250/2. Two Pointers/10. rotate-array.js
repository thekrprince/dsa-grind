// LC 189 - Rotate Array - https://leetcode.com/problems/rotate-array/description/

function rotateArray(nums, k) {
    k = k % nums.length;

    function reverse(i, j) {
        while (i < j) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
            j--;
        }
    }

    reverse(0, nums.length - 1);
    reverse(0, k - 1);
    reverse(k, nums.length - 1);

    console.log(nums);
}

rotateArray([1, 2, 3, 4, 5, 6, 7], 3); // [5, 6, 7, 1, 2, 3, 4]
rotateArray([-1, -100, 3, 99], 2); // [ 3, 99, -1, -100 ]

// Below example is the reason why do we have to do k%nums.length
rotateArray([1, 2, 3, 4, 5], 7); // [ 4, 5, 1, 2, 3 ]