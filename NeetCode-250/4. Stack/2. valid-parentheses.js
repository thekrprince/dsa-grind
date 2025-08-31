// LC 20. Valid Parentheses

function isValid(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "[" || s[i] === "(" || s[i] === "{") {
            stack.push(s[i]);
        } else {
            const popped = stack.pop();
            if (s[i] === "]" && popped === "[" || s[i] === "}" && popped === "{" || s[i] === ")" && popped === "(") {
                continue;
            } else {
                return false;
            }
        }
    }

    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(}"));
console.log(isValid("([)]"));
console.log(isValid("["));