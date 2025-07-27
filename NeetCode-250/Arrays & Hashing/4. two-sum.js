// LC 1 - Two Sum

let twoSum = function (nums, target) {
    let numMap = {};

    for(let i=0; i<nums.length; i++) {
        const diff = target - nums[i];

        if(numMap.hasOwnProperty(diff)) {
            return [numMap[diff], i];
        }

        numMap[nums[i]] = i;
    }
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));