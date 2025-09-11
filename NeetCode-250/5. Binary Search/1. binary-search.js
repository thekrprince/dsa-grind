// LC 704. Binary Search - https://leetcode.com/problems/binary-search/description/

function binarySearch(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9));
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 2));