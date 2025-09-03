// LC 739. Daily Temperatures - https://leetcode.com/problems/daily-temperatures/description/

function dailyTemperatures(temperatures) {
    let stack = [];
    let res = [];

    for (let i = temperatures.length - 1; i >= 0; i--) {
        while (stack.length > 0 && stack[stack.length - 1][0] <= temperatures[i]) {
            stack.pop();
        }

        if (stack.length === 0) {
            res.push(0);
        } else {
            let temp = stack[stack.length - 1][1] - i;
            res.push(temp);
        }

        stack.push([temperatures[i], i]);
    }

    return res.reverse();
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
console.log(dailyTemperatures([30, 40, 50, 60]));
console.log(dailyTemperatures([30, 60, 90]));
console.log(dailyTemperatures([89, 62, 70, 58, 47, 47, 46, 76, 100, 70]));