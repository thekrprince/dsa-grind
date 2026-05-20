// LC 283 - Move Zeroes
// Note that you must do this in-place without making a copy of the array.

function moveZeroes(nums) {
    let x = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[x] = nums[i];
            x++;
        }
    }

    while (x < nums.length) {
        nums[x] = 0;
        x++;
    }

    console.log(nums);
}

moveZeroes([0, 1, 0, 3, 12]);
moveZeroes([1, 3, 0, 0, 12]);
moveZeroes([0]);
moveZeroes([0, 0, 1]);
moveZeroes([0, 0, 0, 0]);
moveZeroes([1, 2, 3]);