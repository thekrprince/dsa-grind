// LC 14 - Longest Common Prefix

function longestCommonPrefix(strs) {
    let prefix = "";

    for(let i=0; i<strs[0].length; i++) {
        let s = strs[0][i];

        for(let j=0; j<strs.length; j++) {
            if(strs[j][i] !== s) {
                return prefix;
            }
        }

        prefix = prefix.concat(s);
    }

    return prefix;
}

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix([""]));
console.log(longestCommonPrefix(["Bengal", "Bengaluru", "Benjamin"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));