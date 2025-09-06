// LC 394. Decode String

function decodeString(s) {
    let stack = [];

    for (let char of s) {
        if (char !== "]") {
            stack.push(char);
        } else {
            let str = "";
            while (stack[stack.length - 1] !== "[") {
                str = stack.pop() + str;
            }
            stack.pop();
            let num = "";
            while (stack[stack.length - 1] >= 0 && stack[stack.length - 1] <= 9) {
                num = stack.pop() + num;
            }
            let convertedNum = Number(num);
            while (convertedNum >= 1) {
                stack.push(str);
                convertedNum--;
            }
        }
    }
    return stack.join("");
}

console.log(decodeString("3[a]2[bc]"));     // aaabcbc
console.log(decodeString("3[a2[c]]"));      // accaccacc
console.log(decodeString("2[abc]3[cd]ef")); // abcabccdcdcdef
console.log(decodeString("10[leetcode]"));  // leetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcode