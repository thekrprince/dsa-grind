// LC 169 - Majority Element

function majorityElement(nums) {
    const obj = {};

    for (let num of nums) {
        obj[num] = (obj[num] || 0) + 1;

        if (obj[num] > nums.length / 2) {
            return num;
        }
    }
}

console.log(majorityElement([3, 2, 3]))
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))