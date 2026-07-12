// LC 34 - FInd First and Last Position of Element in Sorted Array

function findFirstAndLastPosition(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let ans = [-1, -1];

    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    if (arr[left] === target) ans[0] = left;

    left = 0;
    right = arr.length - 1;

    while (left < right) {
        const mid = left + Math.ceil((right - left) / 2);

        if (arr[mid] > target) {
            right = mid - 1;
        } else {
            left = mid;
        }
    }

    if (arr[left] === target) ans[1] = left;
    return ans;
}

console.log(findFirstAndLastPosition([2, 4, 4, 6, 6, 6, 6, 7, 10, 10], 6));
console.log(findFirstAndLastPosition([2, 4, 4, 5, 6, 6, 6, 7, 10, 10], 10));
console.log(findFirstAndLastPosition([2, 4, 4, 6, 6, 6, 6, 7, 10, 10], 2));