// LC 219 - Contains Duplicate 2 - https://leetcode.com/problems/contains-duplicate-ii/description/

function containsDuplicate(nums, k) {
    let set = new Set();
    let i = 0;

    for (let j = 1; j < nums.length; j++) {
        if (set.has(nums[i])) return true;
        set.add(nums[i]);

        if (set.size > k) {
            set.delete(nums[i]);
        }
    }

    return false;
}

console.log(containsDuplicate([1, 2, 3, 1], 3));
console.log(containsDuplicate([1, 0, 1, 1], 1));
console.log(containsDuplicate([1, 2, 3, 1, 2, 3], 2));
console.log(containsDuplicate([1, 2, 1], 0));
console.log(containsDuplicate([0, 1, 2, 3, 2, 5], 3));
console.log(containsDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 9], 3));