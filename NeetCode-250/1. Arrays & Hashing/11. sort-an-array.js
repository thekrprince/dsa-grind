// LC 912 - Sort an Array

function sortArray(nums) {
    if (nums.length <= 1) {
        return nums;
    }

    let mid = Math.floor(nums.length / 2);
    let left = sortArray(nums.slice(0, mid));
    let right = sortArray(nums.slice(mid));
    return merge(left, right);
}

function merge(leftArr, rightArr) {
    let i = 0;
    let j = 0;
    let res = [];

    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] > rightArr[j]) {
            res.push(rightArr[j]);
            j++;
        } else {
            res.push(leftArr[i]);
            i++;
        }
    }

    return res.concat(leftArr.slice(i)).concat(rightArr.slice(j))
}

console.log(sortArray([5, 2, 3, 1]));
console.log(sortArray([5, 1, 1, 2, 0, 0]));