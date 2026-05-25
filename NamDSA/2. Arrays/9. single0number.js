// LC 136 - Single Number
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// To solve this problem in linear runtime, you need to use Bitwise XOR

var singleNumber = function (nums) {
    let xor = 0;

    for (let num of nums) {
        xor = xor ^ num;
    }

    return xor;
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));
console.log(singleNumber([11, 101, 11, 79, 27, 101, 27]));