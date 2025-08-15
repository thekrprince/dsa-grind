// LC 11 - Container With Most Water - https://leetcode.com/problems/container-with-most-water/description/

var maxArea = function (height) {
    let i = 0;
    let j = height.length - 1;
    let res = 0;

    while (i < j) {
        let area = Math.min(height[i], height[j]) * (j - i);
        res = Math.max(res, area);

        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }

    return res;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1
