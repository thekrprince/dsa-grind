// LC 229 - Majority Element II

function majorityElement(nums) {
    let res = [];
    let n = Math.floor(nums.length / 3) + 1;
    let numObj = {};

    for (let num of nums) {
        numObj[num] = (numObj[num] || 0) + 1;

        if (numObj[num] === n) {
            res.push(num);
        }
    }

    return res;
}

console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([1])); // 1
console.log(majorityElement([1, 2])); // [1, 2]