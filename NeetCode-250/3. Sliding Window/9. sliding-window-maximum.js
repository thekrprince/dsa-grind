// LC 239. Sliding Window Maximum

// This solution is not efficient as it will throw timeout error

function maxSlidingWindow(nums, k) {
    let res = [];
    let i = 0;
    let j = 0;

    while (j < nums.length) {

        if (j - i + 1 < k) {
            j++;
        } else if (j - i + 1 === k) {
            let m = Math.max(...nums.slice(i, j + 1));
            res.push(m);
            i++;
            j++;
        }
    }

    return res;
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(maxSlidingWindow([1], 1));