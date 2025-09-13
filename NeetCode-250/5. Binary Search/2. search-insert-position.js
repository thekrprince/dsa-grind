// LC 35. Search Insert Position - https://leetcode.com/problems/search-insert-position/

function searchInsertPosition(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while(low <= high) {
        let mid = Math.floor((low + high) / 2);

        if(nums[mid] === target) {
            return mid;
        } else if(nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return low;
}

console.log(searchInsertPosition([1,3,5,6], 5)); // 2
console.log(searchInsertPosition([1,3,5,6], 2)); // 1
console.log(searchInsertPosition([1,3,5,6], 7)); // 4
console.log(searchInsertPosition([1,3,5,6], 0)); // 0