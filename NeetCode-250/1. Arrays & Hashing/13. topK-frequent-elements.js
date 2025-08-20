// LC 347 - Top K Frequent Elements
function topKFrequent(nums, k) {
    const numsObj = {};

    for (let num of nums) {
        numsObj[num] = (numsObj[num] || 0) + 1;
    }

    const sortedObj = Object.entries(numsObj).sort((a, b) => b[1] - a[1]);

    const topKEle = [];

    for (let i = 0; i < k; i++) {
        topKEle.push(parseInt(sortedObj[i][0]));
    }

    return topKEle;
}

console.log(topKFrequent([1, 1, 1, 2, 3, 3], 2)); // [1, 3]
console.log(topKFrequent([1], 1)); // [1]