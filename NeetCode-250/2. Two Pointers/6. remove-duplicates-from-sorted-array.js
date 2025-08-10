// LC 26 - Remove Duplicates from Sorted Array

function removeDuplicates(nums) {
    let i = 0;

    for (let j = 1; j < nums.length; j++) {
        console.log(nums)
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }

    console.log("Total duplicates removed", i + 1);
    console.log(nums);
}

removeDuplicates([1, 1, 2]);
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);