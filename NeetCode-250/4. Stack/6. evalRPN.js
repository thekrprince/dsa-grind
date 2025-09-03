// LC 150. Evaluate Reverse Polish Notation - https://leetcode.com/problems/evaluate-reverse-polish-notation/description/

function evalRPN(tokens) {
    let stack = [];

    for (let token of tokens) {
        if (!isNaN(token)) {
            stack.push(parseInt(token));
        } else {
            let a = stack.pop();
            let b = stack.pop();
            if (token === "+") {
                stack.push(b + a);
            } else if (token === "-") {
                stack.push(b - a);
            } else if (token === "*") {
                stack.push(b * a);
            } else if (token === "/") {
                stack.push(Math.trunc(b / a));
            }
        }
    }

    return stack[0];
}

console.log(evalRPN(["2", "1", "+", "3", "*"])); // 9
console.log(evalRPN(["4", "13", "5", "/", "+"])); // 6
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])); // 22