// LC 1929 - Concatenation of Array - https://leetcode.com/problems/concatenation-of-array/

const getConcatenation = function (nums) {
    return [...nums, ...nums];
};

console.log(getConcatenation([1, 2, 3]));