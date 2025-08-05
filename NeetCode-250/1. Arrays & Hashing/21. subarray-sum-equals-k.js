// LC 560 - Subarray Sum Equals K

function subarraySum(nums, k) {
    const obj = {};
    obj[0] = 1;
    let sum = 0;
    let count = 0;

    for(let num of nums) {
        sum += num;
        
        if(obj[sum-k]) {
            count += obj[sum - k]
        }

        obj[sum] = (obj[sum] || 0) + 1;
    }

    return count;
}

console.log(subarraySum([1,1,1], 2)); // 2
console.log(subarraySum([1,2,3], 3)); // 2