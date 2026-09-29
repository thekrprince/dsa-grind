// LC 1221. Split a String in Balanced Strings

var balancedStringSplit = function (s) {
    let count = 0;
    let balancedString = 0;

    for (let ch of s) {
        if (ch === "R") {
            count++;
        } else {
            count--;
        }

        if (count === 0) {
            balancedString++;
        }
    }
    return balancedString;
};

console.log(balancedStringSplit("RLRRLLRLRL"));
console.log(balancedStringSplit("RLRRRLLRLL"));
console.log(balancedStringSplit("LLLLRRRR"));